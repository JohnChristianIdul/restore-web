import React from 'react';
import Header from './views/Header.jsx';
import SubHeader from "./views/Sub-header.jsx";
import './index.css';
import ForecastCardController from "./controller/ForecastCardController.jsx";
import NextMonthForecastController from "./controller/NextMonthForecastController.jsx";
import ProductDemandForecastController from "./controller/ProductDemandForecastController.jsx";
import ForecastGraphView from "./views/ForecastGraphView.jsx";
import InsightController from "./controller/InsightController.jsx"
function App() {
  return (
      <>
        <Header />
        <SubHeader />
        <div className="flex-col">
            <div className="float-left w-1/3">
                <ForecastCardController />
                <NextMonthForecastController />
                <ProductDemandForecastController />
                {/*<InsightController />*/}
            </div>
            <div className="float-right w-2/3">
                <ForecastGraphView />
            </div>
        </div>
      </>
  );
}

export default App;