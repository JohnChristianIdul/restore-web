import { useReducer } from "react";

// Define initial state for forecast data
const initialState = {
  forecastData: [],
};

// Define action types
const actionTypes = {
  SET_FORECAST_DATA: "SET_FORECAST_DATA",
};

// Define reducer function to manage state updates based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_FORECAST_DATA:
      return { ...state, forecastData: action.newData };
    default:
      return state;
  }
};

// Custom hook to handle state and dispatch
const useForecastData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setForecastData = (newData) => {
    dispatch({ type: actionTypes.SET_FORECAST_DATA, newData });
  };

  return { forecastData: state.forecastData, setForecastData };
};

export { useForecastData };