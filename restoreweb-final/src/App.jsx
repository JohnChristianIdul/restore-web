import React from 'react';
import Header from './views/Header.jsx';
import SubHeader from "./views/Sub-header.jsx";
import './index.css';
import ForecastCardView from "./views/ForecastCardView.jsx";
import NextMonthForecastView from "./views/NextMonthForecastView.jsx";
import ProductDemandForecastView from "./views/ProductDemandForecastView.jsx";
import ForecastGraphView from "./views/ForecastGraphView.jsx";
import InsightView from "./views/InsightView.jsx";

function App() {
  return (
      <>
        <Header />
        <SubHeader />
        <div className="flex-col">
            <div className="float-left w-1/3">
                <ForecastCardView />
                <NextMonthForecastView />
                <ProductDemandForecastView />
                <InsightView />
            </div>
            <div className="float-right w-2/3">
                <ForecastGraphView />
            </div>
        </div>

      </>
  );
}

export default App;