import { useReducer } from "react";

// Define initial state for insight
const initialState = {
  insight: "",
};

// Define action types
const actionTypes = {
  SET_INSIGHT: "SET_INSIGHT",
};

// Define reducer function to manage state updates based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_INSIGHT:
      return { ...state, insight: action.insight }; // Update insight
    default:
      return state;
  }
};

// Custom hook to handle state and dispatch
const useInsight = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setInsight = (insight) => {
    dispatch({ type: actionTypes.SET_INSIGHT, insight });
  };

  return { insight: state.insight, setInsight };
};

export { useInsight };
