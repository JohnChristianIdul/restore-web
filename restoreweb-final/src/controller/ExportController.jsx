import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useExportData } from "../models/ExportingModel.jsx";
import ExportButtonView from "../views/ExportButtonView.jsx";

const ExportController = () => {
    const { state, setForecastData, setInsightData, setLoading, setError, handleExportToExcel } = useExportData();
    const [hasFetchedData, setHasFetchedData] = useState(false);

    const fetchData = async () => {
        console.log('Fetching data...');
        setLoading(true);

        try {
            // Fetch forecast data
            const forecastResponse = await axios.get("http://127.0.0.1:5000/predict");
            setForecastData(forecastResponse.data);
            console.log('forecast response: ', forecastResponse.data)
            // Fetch insight data
            const insightResponse = await axios.get("http://127.0.0.1:5000/prediction_insight");
            setInsightData(insightResponse.data);
            console.log('insight response: ', insightResponse.data)
            setHasFetchedData(true); // Mark data as fetched
        } catch (error) {
            setError("Error fetching data");
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!hasFetchedData) {
            fetchData();
        }
    }, [hasFetchedData]);

    const handleExport = () => {
        console.log("Export button clicked in controller");
        console.log("Current state:", state);
        if (hasFetchedData && (Object.keys(state.forecastData).length > 0 || Object.keys(state.insightData).length > 0)) {
            handleExportToExcel();
        } else if (!hasFetchedData) {
            console.log('Data is still being fetched. Please wait...');
        } else {
            console.log('No data available to export');
        }
    };

    return (
        <>
            <ExportButtonView onExport={handleExport} />
            {state.isLoading && <p>Loading...</p>}
            {state.error && <p>Error: {state.error}</p>}
        </>
    );
};

export default ExportController;
