import React from 'react';
import '../index.css';
import SubHeader from "./SubHeader.jsx";
import ForecastCardController from "../controller/ForecastCardController.jsx";
import NextMonthForecastController from "../controller/NextMonthForecastController.jsx";
import ProductDemandForecastController from "../controller/ProductDemandForecastController.jsx";
import InsightController from "../controller/InsightController.jsx";
import ForecastGraphController from "../controller/ForecastGraphController.jsx";


const ForecastView = () => {
    return (
        <>
            <SubHeader />
            <div className="flex-col">
                <div className="float-left w-1/3">
                    <ForecastCardController />
                    <NextMonthForecastController />
                    <ProductDemandForecastController />
                    <InsightController />
                </div>
                <div className="float-right w-2/3">
                    <ForecastGraphController />
                </div>
            </div>
        </>
    );
}

export default ForecastView;