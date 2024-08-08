import { useReducer } from "react";

const initialInsightData = { insightData: [], isLoading: false, error: null };
const actionTypes = { SET_INSIGHT_DATA: "SET_INSIGHT_DATA", SET_LOADING: "SET_LOADING", SET_ERROR: "SET_ERROR" };

const insightReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_INSIGHT_DATA:
            return { ...state, insightData: action.newData, isLoading: false, error: null };
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.error, isLoading: false };
        default:
            return state;
    }
};

const useInsightData = () => {
    const [state, dispatch] = useReducer(insightReducer, initialInsightData);

    const setInsightData = (newData) => dispatch({ type: actionTypes.SET_INSIGHT_DATA, newData });
    const setLoading = (isLoading) => dispatch({ type: actionTypes.SET_LOADING, isLoading });
    const setError = (error) => dispatch({ type: actionTypes.SET_ERROR, error });

    return { state, setInsightData, setLoading, setError };
};

export { useInsightData };
