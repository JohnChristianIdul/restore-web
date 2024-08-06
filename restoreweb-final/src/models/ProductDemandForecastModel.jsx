import { useReducer } from "react";

const initialProductForecastData = { productForecastData: [], isLoading: false, error: null };
const actionTypes = { SET_PRODUCT_FORECAST_DATA: "SET_PRODUCT_FORECAST_DATA", SET_LOADING: "SET_LOADING", SET_ERROR: "SET_ERROR" };

const productForecastReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCT_FORECAST_DATA:
            return { ...state, productForecastData: action.newData, isLoading: false, error: null };
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

const useProductForecastData = () => {
    const [state, dispatch] = useReducer(productForecastReducer, initialProductForecastData);

    const setProductForecastData = (newData) => dispatch({ type: actionTypes.SET_PRODUCT_FORECAST_DATA, newData });
    const setLoading = (isLoading) => dispatch({ type: actionTypes.SET_LOADING, isLoading });
    const setError = (error) => dispatch({ type: actionTypes.SET_ERROR, error });

    return { state, setProductForecastData, setLoading, setError };
};

export { useProductForecastData };
