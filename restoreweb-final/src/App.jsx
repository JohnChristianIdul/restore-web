import React from 'react';
import Header from './views/Header.jsx';
import './index.css';
import ForecastCardController from "./controller/ForecastCardController.jsx";
import NextMonthForecastController from "./controller/NextMonthForecastController.jsx";
// import ProductDemandForecastController from "./controller/ProductDemandForecastController.jsx";
import ForecastGraphController from "./controller/ForecastGraphController.jsx";
import TopBar from './views/TopBar.jsx';
import LoginView from './views/LoginView.jsx';
import SignUpView from './views/SignUpView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing.jsx';
import InsightController from "./controller/InsightController.jsx"
import ExportController from "./controller/ExportController.jsx";
import SubHeader from "./views/SubHeader.jsx";

function App() {
  return (
      <>
        <BrowserRouter>
        <TopBar/>
        
          <Routes>
            <Route path='/' element= { <Landing /> }></Route>
            <Route path='/sign-up' element = {<SignUpView />}> </Route>
            <Route path='/login' element = {<LoginView />}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;