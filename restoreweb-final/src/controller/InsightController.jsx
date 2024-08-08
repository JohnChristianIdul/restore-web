import React, { useEffect, useState } from "react";
import axios from "axios";
import InsightView from "../views/InsightView.jsx";
import { useInsightData } from "../models/InsightDataModel.jsx";

const InsightController = () => {
    const { state, setInsightData, setLoading, setError } = useInsightData();
    const [hasFetchedInsight, setHasFetchedInsight] = useState(false);

    const fetchInsight = async () => {
        setLoading(true);

        try {
            const response = await axios.get("http://127.0.0.1:5000/prediction_insight");
            const insightData = response.data;
            setInsightData(insightData);
            setHasFetchedInsight(true); // Mark insight as fetched
        } catch (error) {
            setError("Error fetching Insight Data");
            console.error("Error fetching insight:", error);
            setInsightData("No insight available.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch insight only when necessary
    useEffect(() => {
        if (!hasFetchedInsight) {
            fetchInsight();
        }
    }, [hasFetchedInsight]); // Dependency to ensure fetch happens only once

    return (
        <>
            <InsightView
                insight={state.insightData}
                isLoading={state.isLoading}
                error={state.error}
            />
        </>
    );
};

export default InsightController;
