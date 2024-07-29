import React, { useEffect, useState } from "react";
import axios from "axios";
import ForecastCardView from "../views/ForecastCardView.jsx";
import { useForecastData } from "../models/ForecastModel.jsx";

const ForecastCardController = () => {
  const { state, setForecastData, setLoading, setError } = useForecastData();
  const [shouldFetch, setShouldFetch] = useState(true);

  const handleCardClick = () => {
    setShouldFetch(true);
  };

  useEffect(() => {
    if (!shouldFetch) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get("http://127.0.0.1:5000/predict");
        const data = response.data;
        setForecastData(data);
        setShouldFetch(false);  // Stop further fetching after getting the data
      } catch (error) {
        setError("Error fetching forecast data");
        console.error("Error fetching forecast data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shouldFetch, setLoading, setForecastData, setError]);

  return (
      <ForecastCardView
          forecastData={state.forecastData}
          isLoading={state.isLoading}
          error={state.error}
          onCardClick={handleCardClick}
      />
  );
};

export default ForecastCardController;
