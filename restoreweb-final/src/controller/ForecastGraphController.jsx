import React, { useEffect } from "react";
import axios from "axios";
import ForecastGraphView from "../views/ForecastGraphView.jsx";
import { useGraphData } from "../models/ForecastGraphDataModel.jsx";

const ForecastGraphController = () => {
    const { state, setGraphData, setLoading, setError } = useGraphData();

    useEffect(() => {
        const fetchGraphData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://127.0.0.1:5000/line_graph_data");
                setGraphData(response.data);
            } catch (error) {
                setError("Error fetching graph data");
                console.error("Error fetching graph data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGraphData();
    }, []); // Empty dependency array ensures this runs only once

    return (
        <ForecastGraphView
            graphData={state.forecastGraphData}
            isLoading={state.isLoading}
            error={state.error}
        />
    );
};

export default ForecastGraphController;
