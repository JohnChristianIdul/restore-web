import { useReducer } from "react";

const initialGraphData = { forecastGraphData: [], isLoading: false, error: null };
const actionTypes = { SET_FORECAST_GRAPH_DATA: "SET_FORECAST_GRAPH_DATA", SET_LOADING: "SET_LOADING", SET_ERROR: "SET_ERROR" };

const graphReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FORECAST_GRAPH_DATA:
            return { ...state, forecastGraphData: action.newData, isLoading: false, error: null };
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

const useGraphData = () => {
    const [state, dispatch] = useReducer(graphReducer, initialGraphData);

    const setGraphData = (newData) => dispatch({ type: actionTypes.SET_FORECAST_GRAPH_DATA, newData });
    const setLoading = (isLoading) => dispatch({ type: actionTypes.SET_LOADING, isLoading });
    const setError = (error) => dispatch({ type: actionTypes.SET_ERROR, error });

    return { state, setGraphData, setLoading, setError };
};

export { useGraphData };
