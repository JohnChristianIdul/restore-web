import React from "react";
import { Card } from "@tremor/react";

const ForecastCardView = ({ forecastData, isLoading, error, onCardClick }) => {

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Card className="mx-auto ml-12 mt-7 mb-3" onClick={onCardClick}>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-xl pb-3">
                Forecast Sales
            </p>
            <p className="text-4xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                {forecastData ? `$${forecastData.prediction}` : "$Placeholder"}
            </p>
        </Card>
    );
};

export default ForecastCardView;
