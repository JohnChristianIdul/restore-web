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
        <TopBar/>
          <Routes>
            <Route path='/' element= { <Landing /> }></Route>
            <Route path='/sign-up' element = {<SignUpView />}> </Route>
            <Route path='/login' element = {<LoginView />}></Route>
            <Route path='/forecast' element = {<ForecastView />}></Route>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
