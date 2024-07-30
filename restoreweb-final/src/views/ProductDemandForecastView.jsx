// import React, { useState } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeaderCell,
//     TableRow,
// } from '@tremor/react';
//
// const ProductDemandForecastView = ({ forecastData, salesData, isLoading, error, onCardClick }) => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//
//     const openModal = () => setIsModalOpen(true);
//     const closeModal = () => setIsModalOpen(false);
//
//     const keys = Object.keys(forecastData).slice(0, 2);
//
//     return (
//         <div>
//             <Table className="mx-auto float-left ml-12 mt-2 bg-dark-tremor-background w-full rounded-2xl mb-5 cursor-pointer" onClick={openModal}>
//                 <TableHead>
//                     <TableHeaderCell>Product Demand</TableHeaderCell>
//                 </TableHead>
//                 <TableHead>
//                     <TableRow>
//                         <TableHeaderCell>Product ID</TableHeaderCell>
//                         <TableHeaderCell>Product Name</TableHeaderCell>
//                         <TableHeaderCell>Projected Demand</TableHeaderCell>
//                     </TableRow>
//                 </TableHead>
//
//                 <TableBody>
//                     {keys.map((key) => {
//                         const prediction = forecastData[key].predictions[0];
//                         return (
//                             <TableRow key={key}>
//                                 <TableCell>{prediction.ProductID}</TableCell>
//                                 <TableCell>{prediction.Product}</TableCell>
//                                 <TableCell>{Math.round(prediction.UnitsSold)}</TableCell>
//                             </TableRow>
//                         );
//                     })}
//                 </TableBody>
//             </Table>
//
//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-lg w-3/4">
//                         <div className="flex justify-end">
//                             <button onClick={closeModal} className="text-red-500">Close</button>
//                         </div>
//                         <Table className="min-w-full bg-white border border-gray-200">
//                             <TableHead>
//                                 <TableRow>
//                                     <TableHeaderCell>Product ID</TableHeaderCell>
//                                     <TableHeaderCell>Product Name</TableHeaderCell>
//                                     <TableHeaderCell>Projected Demand</TableHeaderCell>
//                                     <TableHeaderCell>Month</TableHeaderCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {Object.keys(forecastData).map((key) => {
//                                     const prediction = forecastData[key].predictions[0];
//                                     return (
//                                         <TableRow key={key}>
//                                             <TableCell>{prediction.ProductID}</TableCell>
//                                             <TableCell>{prediction.Product}</TableCell>
//                                             <TableCell>{Math.round(prediction.UnitsSold)}</TableCell>
//                                             <TableCell>{prediction.Month.split(' ')[0]}</TableCell>
//                                         </TableRow>
//                                     );
//                                 })}
//                             </TableBody>
//                         </Table>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default ProductDemandForecastView;
