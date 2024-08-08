import React, { useState, useEffect } from 'react';
import './index.css';
import ForecastCardController from "./controller/ForecastCardController.jsx";
import NextMonthForecastController from "./controller/NextMonthForecastController.jsx";
import ProductDemandForecastController from "./controller/ProductDemandForecastController.jsx";
import ForecastGraphView from "./views/ForecastGraphView.jsx";
import ImportView from "./views/ImportView.jsx";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast
import TopBar from './views/TopBar.jsx';
import LoginView from './views/LoginView.jsx';
import SignUpView from './views/SignUpView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing.jsx';
import Forecast from "./Forecast.jsx";

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

  const handleBothFilesUploaded = () => {
    setDataFetched(true);
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/sign-up' element={<SignUpView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/import' element={<ImportView onBothFilesUploaded={handleBothFilesUploaded} />} />
          <Route path='/forecast' element={<Forecast />} />
        </Routes>
        <ToastContainer /> {/* Add this line */}
      </BrowserRouter>
    </>
  );
}

export default App;
