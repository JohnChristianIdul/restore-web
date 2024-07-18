const initialState = {
    salesData: [],
  };
  
  const actionTypes = {
    SET_SALES_DATA: "SET_SALES_DATA",
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_SALES_DATA:
        return { ...state, salesData: action.newData };
      default:
        return state;
    }
  };
  
  export { initialState, actionTypes, reducer };
  