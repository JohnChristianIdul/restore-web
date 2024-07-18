import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
} from '@tremor/react';
import '@tremor/react/dist/components/layout-elements/Card/Card.js';
import { Card } from '@tremor/react';

const NextMonthForecastView = ({forecastData, salesData}) => (
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
                <TableCell>Wilhelm Tell</TableCell>
                <TableCell>1</TableCell>
                <TableCell>Uri, Schwyz, Unterwalden</TableCell>
                <TableCell>National Hero</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>The Witcher</TableCell>
                <TableCell>129</TableCell>
                <TableCell>Kaedwen</TableCell>
                <TableCell>Legend</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Mizutsune</TableCell>
                <TableCell>82</TableCell>
                <TableCell>Japan</TableCell>
                <TableCell>N/A</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export default NextMonthForecastView;