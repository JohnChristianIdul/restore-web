import React from 'react';
import '../styles/Sub-header.css';
import ExportController from "../controller/ExportController.jsx";

function SubHeader() {
    return (
        <div className="w-screen justify-between inline-flex">
            <h1 className="text-5xl font-semibold ml-12 mt-10">Forecasting</h1>
            <ExportController />
        </div>
    );
}

export default SubHeader;