import { useReducer, useState } from "react";

const initialForecastData = { forecastData: [], isLoading: false, error: null };
const actionTypes = { SET_FORECAST_DATA: "SET_FORECAST_DATA", SET_LOADING: "SET_LOADING", SET_ERROR: "SET_ERROR" };

const forecastReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FORECAST_DATA:
            return { ...state, forecastData: action.newData, isLoading: false, error: null };
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

const useForecastData = () => {
    const [state, dispatch] = useReducer(forecastReducer, initialForecastData);

    const setForecastData = (newData) => {
        dispatch({ type: actionTypes.SET_FORECAST_DATA, newData });
    };
    const setLoading = (isLoading) => dispatch({ type: actionTypes.SET_LOADING, isLoading });
    const setError = (error) => dispatch({ type: actionTypes.SET_ERROR, error });


    return { state, setForecastData, setLoading, setError };
};

export { useForecastData };
