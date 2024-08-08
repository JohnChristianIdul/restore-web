import React, { useState, useEffect } from 'react';
import '../styles/Sub-header.css';

function SubHeader() {
    const [demandData, setDemandData] = useState({});
    const [salesData, setSalesData] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const demandResponse = await fetch('http://127.0.0.1:5000/predict_demand');
                const salesResponse = await fetch('http://127.0.0.1:5000/predict');
                
                const demandJson = await demandResponse.json();
                const salesJson = await salesResponse.json();

                setDemandData(demandJson);
                setSalesData(salesJson);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const jsonToCSV = (jsonData, isSalesData) => {
        if (!jsonData) return '';
        try {
            if (isSalesData) {
                // Sales Data format: { "next_month": ..., "percentage_increase": ..., "prediction": ... }
                const header = 'Next Month,Percentage Increase,Prediction';
                const rows = [
                    `${jsonData.next_month},${jsonData.percentage_increase},${jsonData.prediction}`
                ];
                return `${header}\n${rows.join('\n')}`;
            } else {
                // Demand Data format: { "1": { "predictions": [ ... ], "future_months": [ ... ] }, ... }
                const header = 'Month,ProductID,Product,UnitsSold';
                const rows = Object.values(jsonData).flatMap(item =>
                    item.predictions.map(pred => {
                        // Convert to YYYY-MM-DD format
                        const month = new Date(pred.Month).toISOString().split('T')[0];
                        return `${month},${pred.ProductID},${pred.Product},${pred.UnitsSold}`;
                    })
                );
                return `${header}\n${rows.join('\n')}`;
            }
        } catch (error) {
            console.error('Error converting JSON to CSV:', error);
            return '';
        }
    };
    
    

    const mergeAndExportCSV = () => {
        if (!demandData || !salesData) {
            console.error('Data is missing or not passed correctly');
            return;
        }

        const demandCSV = jsonToCSV(demandData, false);
        const salesCSV = jsonToCSV(salesData, true);

        // Combine both CSV contents
        const combinedCSV = `Demand Data:\n${demandCSV}\n\nSales Data:\n${salesCSV}`;

        // Create a Blob and URL for download
        const blob = new Blob([combinedCSV], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);

        // Create a link and click it to download the file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'combined_data.csv'; // File name for the download
        document.body.appendChild(link); // Append link to the body
        link.click(); // Simulate click to start download
        document.body.removeChild(link); // Remove link after download

        // Clean up
        URL.revokeObjectURL(url);
    };

    return (
        <div className="w-screen justify-between inline-flex">
            <h1 className="text-5xl font-semibold ml-12 mt-10">Forecasting</h1>
            <button
                className="text-tremore-default mr-20 mt-auto h-fit bg-emerald-700"
                onClick={mergeAndExportCSV}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Export'}
            </button>
        </div>
    );
}

export default SubHeader;
