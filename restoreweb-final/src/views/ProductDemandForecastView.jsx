import React, { useState, useEffect, useRef } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const ProductDemandForecastView = ({ forecastData, isLoading, error, onCardClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        console.log("Forecast data received:", forecastData); // Debug log
    }, [forecastData]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';  // Disable background scroll
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';  // Enable background scroll
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';  // Ensure scroll is enabled when component unmounts
        };
    }, [isModalOpen]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const renderTableRows = (allData = false) => {
        if (!forecastData || Object.keys(forecastData).length === 0) {
            console.log("No data available check triggered"); // Debug log
            return (
                <TableRow>
                    <TableCell colSpan={3}>No data available</TableCell>
                </TableRow>
            );
        }

        console.log("Rendering forecast data keys:", Object.keys(forecastData)); // Log keys

        const dataKeys = Object.keys(forecastData);
        const keysToRender = allData ? dataKeys : dataKeys.slice(0, 5);

        return keysToRender.map((key) => {
            const prediction = forecastData[key].predictions[0];
            console.log("Rendering prediction for key:", key, prediction); // Log each prediction
            return (
                <TableRow key={key}>
                    <TableCell>{prediction.ProductID}</TableCell>
                    <TableCell>{prediction.Product}</TableCell>
                    <TableCell>{Math.round(prediction.UnitsSold)}</TableCell>
                </TableRow>
            );
        });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <Table className="mx-auto float-left ml-12 mt-2 bg-dark-tremor-background w-full rounded-2xl mb-5 cursor-pointer" onClick={openModal}>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Product ID</TableHeaderCell>
                        <TableHeaderCell>Product Name</TableHeaderCell>
                        <TableHeaderCell>Projected Demand</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {renderTableRows(false)}
                </TableBody>
            </Table>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div ref={modalRef} className="bg-dark-tremor-background p-6 rounded-2xl w-11/12 max-w-5xl h-3/4 max-h-screen overflow-y-auto">
                        <div className="flex justify-end mb-4">
                        </div>
                        <Table className="min-w-full bg-dark-tremor-background border border-gray-200">
                            <TableHead>
                                <TableRow>
                                    <TableHeaderCell>Product ID</TableHeaderCell>
                                    <TableHeaderCell>Product Name</TableHeaderCell>
                                    <TableHeaderCell>Projected Demand</TableHeaderCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {renderTableRows(true)}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDemandForecastView;
