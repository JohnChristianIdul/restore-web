import React from "react";
import ExportView from "./ExportView";
import { useExportData } from "./ExportModel";

const ExportController = () => {
  const { exportData, setExportData } = useExportData();

  // Function to handle export data to Excel
  const handleExportToExcel = () => {
    // Logic to export data to Excel
    // Replace this with your actual logic
    console.log("Exporting data to Excel:", exportData);
  };

  return <ExportView onExport={handleExportToExcel} />;
};

export default ExportController;