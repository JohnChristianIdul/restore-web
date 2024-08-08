import React, { useState, useEffect } from 'react';
import Header from './views/Header.jsx';
import SubHeader from './views/Sub-header.jsx';
import './index.css';
import ForecastCardController from "./controller/ForecastCardController.jsx";
import NextMonthForecastController from "./controller/NextMonthForecastController.jsx";
import ProductDemandForecastController from "./controller/ProductDemandForecastController.jsx";
import ForecastGraphView from "./views/ForecastGraphView.jsx";
import ImportView from "./views/ImportView.jsx";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast


function App() {
  const [filesData, setFilesData] = useState({
    demand: null,
    sales: null,
  });
  const [dataFetched, setDataFetched] = useState(false);

  const handleFileUpload = (fileType, data) => {
    setFilesData(prevState => ({
      ...prevState,
      [fileType]: data
    }));
  };

  // Use useEffect to check file upload status
  useEffect(() => {
    if (filesData.demand && filesData.sales) {
      // Check if both files contain non-empty data
      if (Object.keys(filesData.demand).length > 0 && Object.keys(filesData.sales).length > 0) {
        setDataFetched(true);
      }
    }
  }, [filesData]);

  return (
    <>
      <Header />
      {dataFetched && <SubHeader demandData={filesData.demand} salesData={filesData.sales} />}
      <div className="flex-col">
        {!dataFetched ? (
          <ImportView onFileSelect={handleFileUpload} />
        ) : (
          <div className="flex-row">
            <div className="float-left w-1/3">
              <ForecastCardController />
              <NextMonthForecastController />
              <ProductDemandForecastController />
              {/* <InsightController /> */}
            </div>
            <div className="float-right w-2/3">
              <ForecastGraphView />
            </div>
          </div>
        )}
      </div>
      <ToastContainer /> {/* Add ToastContainer here */}
    </>
  );
}

export default App;
