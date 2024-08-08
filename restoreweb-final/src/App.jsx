import React from 'react';
import './index.css';
import TopBar from './views/TopBar.jsx';
import LoginView from './views/LoginView.jsx';
import SignUpView from './views/SignUpView.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing.jsx';
import Forecast from "./Forecast.jsx";

function App() {
  return (
      <>
        <BrowserRouter>
        <TopBar/>
          <Route>
            <Route path='/' element= { <Landing /> }></Route>
            <Route path='/sign-up' element = {<SignUpView />}> </Route>
            <Route path='/login' element = {<LoginView />}></Route>
            <Route path'forecast' element = {<Forecast />}></Route>
          </Route>
        </BrowserRouter>
      </>
  );
}

export default App;