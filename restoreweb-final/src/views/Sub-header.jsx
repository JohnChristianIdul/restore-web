import React from 'react';
import '../styles/Sub-header.css';

function SubHeader() {
    return (
        <div className="w-screen justify-between inline-flex">
            <h1 className="text-5xl font-semibold ml-12 mt-10">Forecasting</h1>
            <button className="text-tremore-default mr-20 mt-auto h-fit bg-emerald-700">Export</button>
        </div>
    );
}

export default SubHeader;