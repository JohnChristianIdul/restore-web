import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastGraphView from "../views/ForecastGraphView.jsx";
import { useForecastData } from "../models/ForecastModel.jsx";

const ForecastGraphController = () => {
 const{state, setForecastGraphData, setLoading, setError} = useForecastData();
 const[shouldFetch, setShouldFetch] = useState(true);

  const handleCardClick = () => {
    setShouldFetch(true);
  };

  // Fetch sales data from API
  useEffect(() => {
    if(!shouldFetch) return;

    const fetchData = async () => {
      setLoading(true);

      try {
        // Example: Fetch sales data from an API
        const response = await fetch("http://127.0.0.1:5000/line_graph_data");
        const data = response.data;
        // Dispatch action to update sales data in the state
        setForecastGraphData(data);
        setShouldFetch(false);
      } catch (error) {
        setError("Error fetching graph data");
        console.error("Error fetching graph data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [shouldFetch, setLoading, setForecastGraphData, setError]);

  // Pass both salesData and forecastData as props to the view component
  return <ForecastGraphView
      graphData={state.forecastGraphData}
      isLoading={state.isLoading}
      error={state.error}
      onCardClick={handleCardClick}
  />;
};

export default ForecastGraphController;