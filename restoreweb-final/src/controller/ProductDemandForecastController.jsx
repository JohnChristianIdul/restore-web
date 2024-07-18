import React, { useEffect, useReducer } from "react";
import ProductDemandForecastView from "./ProductDemandForecastView";
import { initialState, reducer, actionTypes } from "./ForecastModel"; // Assuming you have a separate model file

const ProductDemandForecastController = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch forecast data from API
  useEffect(() => {
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

  return <ProductDemandForecastView forecastData={state.forecastData} />;
};

export default ProductDemandForecastController;
