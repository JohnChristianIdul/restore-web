import { useReducer } from "react";
import * as XLSX from 'xlsx';
import axios from "axios";

const initialExportData = { forecastData: [], insightData: [], demandData: [], isLoading: false, error: null };
const actionTypes = {
    SET_FORECAST_DATA: "SET_FORECAST_DATA",
    SET_INSIGHT_DATA: "SET_INSIGHT_DATA",
    SET_DEMAND_DATA: "SET_DEMAND_DATA",
    SET_LOADING: "SET_LOADING",
    SET_ERROR: "SET_ERROR"
};

const exportReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_FORECAST_DATA:
            return { ...state, forecastData: action.newData };
        case actionTypes.SET_INSIGHT_DATA:
            return { ...state, insightData: action.newData };
        case actionTypes.SET_DEMAND_DATA:
            return { ...state, demandData: action.newData };
        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.isLoading };
        case actionTypes.SET_ERROR:
            return { ...state, error: action.error };
        default:
            return state;
    }
};

const useExportData = () => {
    const [state, dispatch] = useReducer(exportReducer, initialExportData);

    const setForecastData = (newData) => dispatch({ type: actionTypes.SET_FORECAST_DATA, newData });
    const setInsightData = (newData) => dispatch({ type: actionTypes.SET_INSIGHT_DATA, newData });
    const setDemandData = (newData) => dispatch({ type: actionTypes.SET_DEMAND_DATA, newData });
    const setLoading = (isLoading) => dispatch({ type: actionTypes.SET_LOADING, isLoading });
    const setError = (error) => dispatch({ type: actionTypes.SET_ERROR, error });

    const handleExportToExcel = () => {
        console.log('Exporting data:', state.forecastData, state.insightData, state.demandData);

        // Helper function to flatten array values
        const flattenValue = (value) => {
            if (Array.isArray(value)) {
                return value.join('\n');
            }
            return value;
        };

        const combinedData = [
            {
                sheetName: 'Forecast Data',
                data: [state.forecastData],
            },
            {
                sheetName: 'Insight Data',
                data: Object.entries(state.insightData).map(([factor, description]) => ({
                    factor: factor.replace(/^-_/, ''),  // Remove leading "-_" if present
                    description: flattenValue(description)
                })),
            },
            {
                sheetName: 'Product Demand Data',
                data: Object.entries(state.demandData).flatMap(([month, items]) =>
                    items.predictions.map(pred => ({
                        Month: new Date(pred.Month).toISOString().split('T')[0],
                        ProductID: pred.ProductID,
                        Product: pred.Product,
                        UnitsSold: pred.UnitsSold
                    }))
                ),
            }
        ];

        const wb = XLSX.utils.book_new();
        let sheetsAdded = 0;
        combinedData.forEach(sheet => {
            if (sheet.data && sheet.data.length > 0) {
                const ws = XLSX.utils.json_to_sheet(sheet.data);

                // Set custom headers and adjust column widths for specific sheets
                if (sheet.sheetName === 'Insight Data') {
                    XLSX.utils.sheet_add_aoa(ws, [['Factor', 'Description']], { origin: 'A1' });
                    ws['!cols'] = [{ wch: 20 }, { wch: 100 }];  // Set width for Factor and Description columns
                }

                if (sheet.sheetName === 'Product Demand Data') {
                    XLSX.utils.sheet_add_aoa(ws, [['Month', 'ProductID', 'Product', 'UnitsSold']], { origin: 'A1' });
                    ws['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 15 }];  // Set width for columns
                }

                XLSX.utils.book_append_sheet(wb, ws, sheet.sheetName);
                sheetsAdded++;
            }
        });

        if (sheetsAdded === 0) {
            console.error('No data available to export');
            return;
        }

        XLSX.writeFile(wb, 'exported_data.xlsx');
    };

    return { state, setForecastData, setInsightData, setDemandData, setLoading, setError, handleExportToExcel };
};

export { useExportData };
