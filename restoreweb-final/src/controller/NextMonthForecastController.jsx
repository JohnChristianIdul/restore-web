import React, { useEffect } from "react";
import axios from "axios";
import NextMonthForecastView from "../views/NextMonthForecastView.jsx";
import { useForecastData } from "../models/ForecastDataModel.jsx";
import { useSalesData } from "../models/SalesDataModel.jsx";

const NextMonthForecastController = () => {
  const { state: forecastState, setForecastData, setLoading, setError } = useForecastData();
  const { state: salesState, setSalesData } = useSalesData();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const forecastResponse = await axios.get("http://127.0.0.1:5000/predict");
        setForecastData(forecastResponse.data);

        const salesResponse = await axios.get("http://127.0.0.1:5000/get_last_item");
        setSalesData(salesResponse.data);
      } catch (error) {
        setError("Error fetching forecast and sales data");
        console.error("Error fetching forecast and sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  return (
      <NextMonthForecastView
          forecastData={forecastState.forecastData}
          salesData={salesState.salesData}
          isLoading={forecastState.isLoading}
          error={forecastState.error}
      />
  );
};

export default NextMonthForecastController;
