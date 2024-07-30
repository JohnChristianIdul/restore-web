import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const NextMonthForecastView = ({ forecastData, salesData, isLoading, error, onCardClick }) => {

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getMonthNameFromDateString = (dateString) => {
        const date = new Date(dateString);
        const month = date.getMonth(); // getMonth() returns month index from 0-11
        return monthNames[month];
    };

    return(
        <Table className="mx-auto float-left ml-12 mt-2 bg-dark-tremor-background w-full rounded-2xl mb-3">
            <TableHead className="outline-dark-tremor-background-emphasis border-b-2">
                <TableHeaderCell>Next Month Forecast</TableHeaderCell>
            </TableHead>

            <TableHead>
                <TableRow>
                    <TableHeaderCell>Month</TableHeaderCell>
                    <TableHeaderCell>
                        Previous
                    </TableHeaderCell>
                    <TableHeaderCell>Projected</TableHeaderCell>
                    <TableHeaderCell>% Change</TableHeaderCell>
                </TableRow>
            </TableHead>

            <TableBody>
                <TableRow>
                    <TableCell>{getMonthNameFromDateString(forecastData.next_month)}</TableCell>
                    <TableCell>{salesData.Sales}</TableCell>
                    <TableCell>{forecastData.prediction}</TableCell>
                    <TableCell>{forecastData.percentage_increase}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default NextMonthForecastView;