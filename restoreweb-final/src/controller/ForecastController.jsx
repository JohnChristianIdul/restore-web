import React, { useEffect, useState} from "react";
import Forecast from "../models/Forecast.js";
import ProductDemandForecastView from "./ProductDemandForecastView.js";
import NextMonthForecastView from "../Views/NextMonthForecastView.js";
import ForecastCardView from "../Views/ForecastCardView.js";
import ForecastGraphView from "../Views/ForecastGraphView.js";
import InsightView from "../views/InsightView.jsx";

const ForecastController = () => {
    const [forecastData, setForecastData] = useState([]);
    const [forecastText, setForecastText] = useState([]);
    const [salesData, setSalesData] = useState([]);
    const [insight, setInsight] = useState([]);

    const forecast = new Forecast();

    useEffect(() => {
        const updateData = () => {
            setForecastData(forecast.ForecastData);
            setForecastText(forecast.ForecastText);
            setSalesData(forecast.SalesData);
            setInsight(forecast.ForecastInsight);
        };

        forecast.subscribe(updateData);

        return () => {
            forecast.unsubscribe(updateData);
        };
    });

    return (
        <>
            <ProductDemandForecastView forecastData={forecastData} />
            <ForecastCardView forecastText={forecastText} />
            <ForecastGraphView forecastData={forecastData} salesData={salesData} />
            <InsightView insight={insight} />
            <NextMonthForecastView forecastData={forecastData} salesData={salesData} />
        </>
       
    );
};

export default ForecastController;