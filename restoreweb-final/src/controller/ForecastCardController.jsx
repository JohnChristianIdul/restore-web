import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastCardView from "../views/ForecastCardView.jsx";
import { useForecastData } from "../models/ForecastDataModel.jsx";

const ForecastCardController = () => {
  const { state, setForecastData, setLoading, setError } = useForecastData();
  const [isDataFetched, setIsDataFetched] = useState(false);

  // Handle card click to trigger data fetch if not already fetched
  const handleCardClick = () => {
    if (!isDataFetched) {
      fetchData();
    }
  };

  // Fetch data function
  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.get("http://127.0.0.1:5000/predict");
      const data = response.data;
      console.log("Fetched data: ", data); // Debugging
      setForecastData(data);
      setIsDataFetched(true); // Mark data as fetched
    } catch (error) {
      setError("Error fetching forecast data");
      console.error("Error fetching forecast data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data only once when the component mounts
  useEffect(() => {
    if (!isDataFetched) {
      fetchData();
    }
  }, [isDataFetched]); // Dependency on isDataFetched to avoid redundant fetches

  return (
      <>
        <ForecastCardView
            forecastData={state.forecastData}
            isLoading={state.isLoading}
            error={state.error}
            onCardClick={handleCardClick}
        />
      </>
  );
};

export default ForecastCardController;
