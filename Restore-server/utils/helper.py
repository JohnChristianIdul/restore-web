# helpers.py
from os import environ
import os, re
from datetime import datetime
import json
import pandas as pd
import statsmodels.api as sm
from flask import jsonify
import google.generativeai as palm
from transformers import AutoTokenizer, AutoModelForCausalLM, pipeline
import torch

trained_models = {}


def train_arima_model(data, order=(1, 1, 1), seasonal_order=(1, 1, 1, 12)):
    model = sm.tsa.statespace.SARIMAX(data, order=order, seasonal_order=seasonal_order).fit()
    return model


def get_last_item_from_json(file_path="output.json"):
    try:
        with open(file_path, "r") as json_file:
            data_list = json.load(json_file)
        last_item = data_list[-1]

        if 'cumulative_gross_sales' in last_item:
            last_item['cumulative_gross_sales'] = round(last_item['cumulative_gross_sales'], 2)

        return last_item
    except Exception as e:
        print(f"Error: {e}")
        return None


def get_sales_performance_history():
    try:
        sales_data = pd.read_csv('uploads/loaded_data.csv')
        sales_data['Month'] = pd.to_datetime(sales_data['Month'], errors='coerce')
        df = sales_data.dropna(subset=['Month'])
        original_column_name = df.columns[1]
        df = df.rename(columns={original_column_name: 'Sales'})

        if 'Sales' not in df.columns:
            return jsonify({"error": "Column 'Sales' not found in the DataFrame"})

        df.sort_values(by='Month', inplace=True)

        sales_history_list = [
            {
                'Month': month.strftime('%b %Y'),
                'Sales': round(sales, 2)
            }
            for month, sales in zip(df['Month'], df['Sales'])
        ]

        percentage_increase = [round(((sales_history_list[i]['Sales'] - sales_history_list[i - 1]['Sales']) /
                                      sales_history_list[i - 1]['Sales'] * 100), 2) if i > 0 else None
                               for i in range(len(sales_history_list))]
        sales_increase = [round((sales_history_list[i]['Sales'] - sales_history_list[i - 1]['Sales']), 2)
                          if i > 0 else None
                          for i in range(len(sales_history_list))]

        combined_data = [
            {
                'Month': sales_history_list[i]['Month'],
                'Sales': sales_history_list[i]['Sales'],
                'PercentageIncrease': percentage_increase[i],
                'DifferenceInSales': sales_increase[i]
            }
            for i in range(1, len(sales_history_list))
        ]

        return jsonify(combined_data)

    except Exception as e:
        return jsonify({"error": str(e)})


def parse_date_xy(input_date):
    # If input_date is a Timestamp object, convert it to string first
    if isinstance(input_date, pd.Timestamp):
        input_date = input_date.strftime('%y-%m')

    # Split the input date into parts
    parts = input_date.split('-')

    # Check the length of the first part (year)
    if len(parts[0]) == 1:
        # Add a leading zero to the year if it's a single digit
        input_datetime = datetime.strptime(f"0{input_date}", "%y-%m")
    else:
        input_datetime = datetime.strptime(f"{input_date}", "%y-%m")

    # Format the datetime object to the desired output format "YYYY-Mon"
    output_date = input_datetime.strftime("%Y-%m")

    return output_date


def detect_date_format(date_column):
    parsed_dates_Ym = pd.to_datetime(date_column, format='%Y-%m', errors='coerce')
    parsed_dates_ym = pd.to_datetime(date_column, format='%y-%m', errors='coerce')

    count_Ym = pd.notna(parsed_dates_Ym).sum()
    count_ym = pd.notna(parsed_dates_ym).sum()

    if count_Ym > count_ym:
        return "%Y-%m"
    else:
        return "%y-%m"


def save_csv_file(df, file_path):
    # Save the DataFrame to a new CSV file
    df.to_csv(file_path, index=False)


def process_data(df):
    try:
        # Rename 'Date' column to 'Month'
        df.rename(columns={'Date': 'Month'}, inplace=True)

        # Convert 'Date' column to datetime format
        df['Month'] = pd.to_datetime(df['Month'], errors='coerce')
        df = df.dropna(subset=['Month'])

        # Extract month and year from the 'Date' column
        df['Month'] = df['Month'].dt.to_period('M')

        # Sort DataFrame by 'Date' within each 'ProductID'
        df = df.sort_values(['ProductID', 'Month'])

        # Save the sorted DataFrame to a single CSV file for each ProductID
        for product_id, product_group in df.groupby('ProductID'):
            filename = f"product_{product_id}_data.csv"
            filepath = os.path.join("models", "product_csv", filename)

            # Save the group to CSV, overwriting the file if it already exists
            product_group[['Month', 'ProductID', 'Product', 'UnitsSold']].to_csv(filepath, index=False, mode='w', header=True)

        return "Grouping and saving completed successfully"

    except Exception as e:
        return {"error": str(e)}


def date_parser(x):
    return datetime.strptime(x, '%Y-%m')


def get_month_name(date_string):
    month_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
                   "November", "December"]
    date = datetime.strptime(date_string, '%Y-%m')
    return month_names[date.month - 1]


# def get_forecast_insight(data):
#     api_key = environ.get('GOOGLE_API_KEY')
#
#     if not api_key:
#         return jsonify({'error': 'API key is missing'}), 500
#
#     try:
#         # Configure the client with the API key
#         palm.configure(api_key=api_key)
#
#         models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
#         model = models[0].name
#
#         prompt = """Explain the sales data fluctuations. Provide the Seasonal Fluctuation, Peak Sales Period, Low Sales Period
#                         Abrupt Fluctuations, and Potential External Factors. Only provide these answers.""" + data
#
#         response = palm.generate_text(
#             model=model,
#             prompt=prompt,
#             temperature=0,
#             max_output_tokens=300,
#         )
#
#         with open('E:/Software Engineering Final Project/Restore-server/insight.txt', 'w', encoding='utf-8') as f:
#             f.write(response.result)
#
#         return jsonify(response.result)
#     except Exception as e:
#         return jsonify({'error': str(e)}), 500

def clean_text(text):
    return text.strip().replace('\n', ' ')


def get_sales_insight(data):
    api_key = environ.get('GOOGLE_API_KEY')

    if not api_key:
        return jsonify({'error': 'API key is missing'}), 500

    try:
        # Configure the client with the API key
        palm.configure(api_key=api_key)

        models = [m for m in palm.list_models() if 'generateText' in m.supported_generation_methods]
        model = models[0].name

        prompt = """Explain the sales data fluctuations. Provide the Seasonal Fluctuation, Peak Sales Period, Low Sales Period
                    Abrupt Fluctuations, and Potential External Factors focusing on Philippine Market specifically on the
                    Weather and climate as one, and economic condition . Only provide these answers and don't add 
                    unnecessary asterisk into the response.""" + data

        response = palm.generate_text(
            model=model,
            prompt=prompt,
            temperature=0,
            max_output_tokens=500,
        )

        # Parse the response result to JSON format
        insight_text = response.result.strip()

        # Print response for debugging
        print("Response Text:", insight_text)

        # Initialize the JSON structure
        insight_json = {
            "Seasonal_Fluctuation": "",
            "Peak_Sales_Period": "",
            "Low_Sales_Period": "",
            "Abrupt_Fluctuations": [],
            "Potential_External_Factors": []
        }

        # Split the text into sections
        sections = re.split(r'(.*?):', insight_text)

        current_section = None
        for i, section in enumerate(sections):
            if i % 2 == 1:  # Section title
                current_section = section.strip().replace(' ', '_')
            else:  # Content
                if current_section:
                    content = clean_text(section)
                    if current_section in ["Abrupt_Fluctuations", "Potential_External_Factors"]:
                        # Process multi-line sections
                        lines = [line.strip() for line in content.split('-') if line.strip()]
                        insight_json[current_section] = lines
                    else:
                        # Process single-line sections
                        insight_json[current_section] = content.strip()

        # Remove empty entries
        insight_json = {k: v for k, v in insight_json.items() if v}

        # Print the JSON (or save it to a file)
        print(json.dumps(insight_json, indent=2))
        # Save the JSON to a file (optional)
        with open('E:/Software Engineering Final Project/Restore-server/insight.json', 'w', encoding='utf-8') as f:
            json.dump(insight_json, f, indent=4)

        # return insight_json
        return jsonify(insight_json)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


def forecast_insight(data):
    model_id = "AIFS/Llama3-8x8B-Time-Agents/"
    tokenizer = AutoTokenizer.from_pretrained(model_id)

    prompt = """Explain the sales data fluctuations. Provide the Seasonal Fluctuation, Peak Sales Period, Low Sales Period
                           Abrupt Fluctuations, and Potential External Factors. Only provide these answers.""" + data

    chat_pipeline = pipeline(
        "text-generation",
        model=model_id,
        tokenizer=tokenizer,
        model_kwargs={"torch_dtype": torch.float16, "load_in_4bit": True},
    )

    messages = [{"role": "user", "content": prompt}]
    prompt = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
    outputs = chat_pipeline(prompt, max_new_tokens=256, do_sample=True, temperature=0.7, top_k=50, top_p=0.95)
    print(outputs[0]["generated_text"])
