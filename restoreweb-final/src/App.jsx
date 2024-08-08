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

import React from 'react';
import './index.css';
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
        <TopBar/>
          <Route>
            <Route path='/' element= { <Landing /> }></Route>
            <Route path='/sign-up' element = {<SignUpView />}> </Route>
            <Route path='/login' element = {<LoginView />}></Route>
            <Route path='/forecast' element = {<Forecast />}></Route>
          </Route>
        </BrowserRouter>
      </>
  );
}

export default App;
