import { useReducer } from "react";

const initialSalesData = { salesData: [], isLoading: false, error: null };
const actionTypes = { SET_SALES_DATA: "SET_SALES_DATA", SET_LOADING: "SET_LOADING", SET_ERROR: "SET_ERROR" };

const salesReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_SALES_DATA:
            return { ...state, salesData: action.newData, isLoading: false, error: null };
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

const useSalesData = () => {
    const [state, dispatch] = useReducer(salesReducer, initialSalesData);

    const setSalesData = (newData) => dispatch({ type: actionTypes.SET_SALES_DATA, newData });
    const setLoading = (isLoading) => dispatch({ type: actionTypes.SET_LOADING, isLoading });
    const setError = (error) => dispatch({ type: actionTypes.SET_ERROR, error });

    return { state, setSalesData, setLoading, setError };
};

export { useSalesData };
