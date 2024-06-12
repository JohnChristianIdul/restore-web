import React, { useReducer, useEffect } from "react";
import ForecastCardView from "./ForecastCardView";
import { initialState, reducer, actionTypes } from "./ForecastModel";

const ForecastCardController = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Example: Fetch forecast data from API
  useEffect(() => {
    // Make API call or fetch data here
    const fetchData = async () => {
      try {
        // Example: Fetch forecast data from an API
        const response = await fetch("your-api-endpoint");
        const data = await response.json();
        // Dispatch action to update forecast data in the state
        dispatch({ type: actionTypes.SET_FORECAST_DATA, newData: data });
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchData();
  }, []);

  return <ForecastCardView forecastText={state.forecastData} />;
};

export default ForecastCardController;
