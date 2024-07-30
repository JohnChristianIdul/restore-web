import React, { useState, useEffect } from "react";
import axios from "axios";
import NextMonthForecastView from "../views/NextMonthForecastView.jsx";
import {useForecastData} from "../models/ForecastModel.jsx";

const NextMonthForecastController = () => {
  // Initialize state and reducer for sales data and forecast data
  const { state, setForecastData, setSalesData, setLoading, setError } = useForecastData();
  const [shouldFetch, setShouldFetch] = useState(true);

  const handleCardClick = () => {
    setShouldFetch(true);
  };

  // Fetch sales data from API
  useEffect(() => {
    if (!shouldFetch) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://127.0.0.1:5000/predict");
        const data = response.data;
        setForecastData(data);
        const response1 = await axios.get("http://127.0.0.1:5000//get_last_item");
        const data1 = response1.data;
        setSalesData(data1);
        setShouldFetch(false);    // Stop further fetching after getting the data
      } catch (error) {
        setError("Error fetching forecast and sales data");
        console.error("Error fetching forecast and sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shouldFetch]);

  // Pass both salesData and forecastData and salesData as props to the view component
  return <NextMonthForecastView
            forecastData={state.forecastData}
            salesData={state.salesData}
            isLoading={state.isLoading}
            error={state.error}
            onCardClick={handleCardClick}/>;
};

export default NextMonthForecastController;