import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';

const NextMonthForecastView = ({ forecastData, salesData, isLoading, error, onCardClick }) => {

    const previousSale = salesData;

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
                    <TableCell>{forecastData.next_month}</TableCell>
                    <TableCell>{salesData.Sales}</TableCell>
                    <TableCell>{forecastData.prediction}</TableCell>
                    <TableCell>{forecastData.percent_increase}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default NextMonthForecastView;