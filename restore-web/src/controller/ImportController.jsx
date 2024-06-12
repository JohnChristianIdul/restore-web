// Controller component
import React, { useReducer } from "react";
import FileSelectorView from "./FileSelectorView";
import { initialState, actionTypes, reducer } from "./Model";

const ImportController = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFileSelect = (file) => {
    // Simulate data saving from spreadsheet
    // Here, you would implement code to read the file and save data
    // For demonstration, let's assume we save an array of objects representing sales data
    const salesDataFromFile = [{ date: "2024-05-13", amount: 100 }, { date: "2024-05-14", amount: 150 }];

    dispatch({ type: actionTypes.SET_SALES_DATA, newData: salesDataFromFile });
  };

  return (
    <div>
      <FileSelectorView onSelectFile={handleFileSelect} />
    </div>
  );
};

export default ImportController;
