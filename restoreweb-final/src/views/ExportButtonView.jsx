import React from 'react';
import '../styles/Sub-header.css'; // Ensure you have the correct path to your styles

const ExportButtonView = ({ onExport }) => {
    console.log("Button rendered with onExport:", onExport); // Check if onExport is a function

    return (
        <div className="w-screen justify-end inline-flex float-right">
            <button
                className="text-tremor-default mr-20 mt-auto h-fit bg-emerald-700"
                onClick={() => {
                    if (typeof onExport === 'function') {
                        console.log("Button rendered with onExport:", onExport, typeof onExport);
                        onExport();
                    } else {
                        console.error('onExport is not a function');
                        console.log("Button rendered with onExport:", onExport, typeof onExport);
                    }
                }}
            >
                Export
            </button>
        </div>
    );
};

export default ExportButtonView;