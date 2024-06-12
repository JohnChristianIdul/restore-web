import React, { useReducer, useEffect } from "react";
import ForecastGraphView from "./ForecastGraphView";
import { initialState as salesInitialState, reducer as salesReducer, actionTypes as salesActionTypes } from "./SalesModel";
import { initialState as forecastInitialState, reducer as forecastReducer, actionTypes as forecastActionTypes } from "./ForecastModel";

const ForecastGraphController = () => {
  // Initialize state and reducer for sales data and forecast data
  const [salesState, salesDispatch] = useReducer(salesReducer, salesInitialState);
  const [forecastState, forecastDispatch] = useReducer(forecastReducer, forecastInitialState);

  // Fetch sales data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example: Fetch sales data from an API
        const salesresponse = await fetch("sales-api-endpoint");
        const forecastresponse = await fetch("api-for-forecast");
        const forecastdata = await forecastresponse.json();
        const salesdata = await salesresponse.json();
        // Dispatch action to update sales data in the state
        salesDispatch({ type: salesActionTypes.SET_SALES_DATA, newData: salesdata });
        forecastDispatch({ type: forecastActionTypes.SET_FORECAST_DATA, newData: forecastdata});
      } catch (error) {
        console.error("Error fetching sales data:", error);
      }
    };

    fetchData();
  }, []);

  // Pass both salesData and forecastData as props to the view component
  return <ForecastGraphView salesData={salesState.salesData} forecastData={forecastState.forecastData} />;
};

export default ForecastGraphController;