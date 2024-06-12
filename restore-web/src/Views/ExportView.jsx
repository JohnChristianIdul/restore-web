import React from "react";
import { Button } from "@mui/material";

const ExportView = ({ onExport }) => {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={onExport}>
        Export
      </Button>
    </div>
  );
};

export default ExportView;
