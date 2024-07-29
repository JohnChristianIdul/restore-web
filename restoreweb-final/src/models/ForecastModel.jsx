import { useReducer } from "react";

// Define initial state for forecast data
const initialData = {
  forecastData: [],
  productForecastData: [],
  salesData:[],
  forecastGraphData:[],
  insightData:[],
  isLoading: true,
  error: null,
};

// Define action types
const actionTypes = {
  SET_FORECAST_DATA: "SET_FORECAST_DATA",
  SET_PRODUCT_FORECAST_DATA: "SET_PRODUCT_FORECAST_DATA",
  SET_SALES_DATA: "SET_SALES_DATA",
  SET_FORECAST_GRAPH_DATA: "SET_FORECAST_GRAPH_DATA",
  SET_INSIGHT_DATA: "SET_INSIGHT_DATA",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

// Define reducer function to manage state updates based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FORECAST_DATA:
      return { ...state, forecastData: action.newData, isLoading: false, error: null };
    case actionTypes.SET_PRODUCT_FORECAST_DATA:
      return {...state, productForecastData: action.newData, isLoading: false, error: null};
    case actionTypes.SET_SALES_DATA:
      return {...state, salesData: action.newData, isLoading: false, error: null};
    case actionTypes.SET_FORECAST_GRAPH_DATA:
      return {...state, forecastGraphData: action.newData, isLoading: false, error: null};
    case actionTypes.SET_INSIGHT_DATA:
      return {...state, salesData: action.newData, isLoading: false, error: null};
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: action.isLoading, error: null };
    case actionTypes.SET_ERROR:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};

// Custom hook to handle state and dispatch
const useForecastData = () => {
  const [state, dispatch] = useReducer(reducer, initialData);

  const setForecastData = (newData) => {
    dispatch({ type: actionTypes.SET_FORECAST_DATA, newData });
  };

  const setProductForecastData = (newData) => {
    dispatch({type: actionTypes.SET_PRODUCT_FORECAST_DATA, newData});
  };

  const setSalesData = (newData) => {
    dispatch({ type: actionTypes.SET_SALES_DATA, newData });
  };

  const setForecastGraphData = (newData) => {
    dispatch({ type: actionTypes.SET_FORECAST_GRAPH_DATA, newData });
  };

  const setInsightData = (newData) => {
    dispatch({ type: actionTypes.SET_INSIGHT_DATA, newData });
  };

  const setLoading = (isLoading) => {
    dispatch({ type: actionTypes.SET_LOADING, isLoading });
  };

  const setError = (error) => {
    dispatch({ type: actionTypes.SET_ERROR, error });
  };

  return { state, setForecastData, setProductForecastData, setSalesData, setForecastGraphData, setInsightData, setLoading, setError };
};

export { useForecastData };
