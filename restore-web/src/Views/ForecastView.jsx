import React from "react";
import Header from "./Header.js";
import ForecastCardView from "./ForecastCardView.jsx";
import ForecastGraphView from "./ForecastGraphView.jsx";
import NextMonthForecastView from "./NextMonthForecastView.jsx";
import ProductDemandForecastView from "./ProductDemandForecastView.jsx";
import InsightView from "./InsightView.jsx";

const ForecastView = () => {
    return (
        <div>
            <Header />
            {/*Align these components to the left*/}
            <ForecastCardView />
            <NextMonthForecastView />
            <ProductDemandForecastView />
            <InsightView /> 
            {/*Align this Graph to the right*/}
            <ForecastGraphView />
        </div>
    );
}

export default ForecastView;