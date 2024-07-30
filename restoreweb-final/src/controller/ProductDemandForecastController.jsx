// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import ProductDemandForecastView from "../views/ProductDemandForecastView.jsx";
// import { useForecastData } from "../models/ForecastModel.jsx";
//
// const ProductDemandForecastController = () => {
//   const { state, setProductForecastData, setLoading, setError } = useForecastData();
//   const [shouldFetch, setShouldFetch] = useState(true);
//
//   // Fetch forecast data from API
//   const handleCardClick = () => {
//     setShouldFetch(true);
//   };
//
//   useEffect(() => {
//     if (!shouldFetch) return;
//
//     const fetchData = async () => {
//       setLoading(true);
//
//       try {
//         const response = await axios.get("http://127.0.0.1:5000/predict_demand");
//         const data = response.data;
//         setProductForecastData(data);
//         setShouldFetch(false);  // Stop further fetching after getting the data
//       } catch (error) {
//         setError("Error fetching product forecast data");
//         console.error("Error fetching product forecast data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//
//     fetchData();
//   }, [shouldFetch, setLoading, setProductForecastData, setError]);
//
//   return <ProductDemandForecastView
//       forecastData={state.forecastData}
//       isLoading={state.isLoading}
//       error={state.error}
//       onCardClick={handleCardClick}
//   />;
// };
//
// export default ProductDemandForecastController;
