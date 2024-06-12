import React, { useEffect } from "react";
import InsightView from "./InsightView";
import { useInsight } from "./InsightModel";

const InsightController = ({ forecastData }) => {
  const { insight, setInsight } = useInsight();

  // Generate insight based on forecast data
  useEffect(() => {
    const generateInsight = async (forecastData) => {
      try {
        if (forecastData.length === 0) {
          setInsight("No forecast data available.");
        } else {
          // Post a query about the data and pass data values
          const query = {
            // Example query parameters based on forecastData
            // Modify as per your API requirements
            parameter1: forecastData[0].parameter1,
            parameter2: forecastData[0].parameter2,
          };

          const response = await fetch("api-endpoint", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(query),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch insight data.");
          }

          const insightData = await response.json();
          setInsight(insightData.insight); // Assuming the response has a field "insight"
        }
      } catch (error) {
        console.error("Error fetching insight:", error);
        setInsight("No insight available.");
      }
    };

    generateInsight(forecastData);
  }, [forecastData, setInsight]);

  return <InsightView insight={insight} />;
};

export default InsightController;