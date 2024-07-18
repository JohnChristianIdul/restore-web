import { useReducer } from "react";

// Define initial state
const initialState = {
  exportData: [], // Data to export
};

// Define action types
const actionTypes = {
  SET_EXPORT_DATA: "SET_EXPORT_DATA",
};

// Define reducer function to manage state updates based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_EXPORT_DATA:
      return { ...state, exportData: action.payload };
    default:
      return state;
  }
};

// Custom hook to handle state and dispatch
const useExportData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setExportData = (data) => {
    dispatch({ type: actionTypes.SET_EXPORT_DATA, payload: data });
  };

  return { exportData: state.exportData, setExportData };
};

export { useExportData };