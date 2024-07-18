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

const ProductDemandForecastView = ({forecastData}) => (
    <div>
            <Table className="mx-auto float-left ml-12 mt-2 bg-dark-tremor-background w-full rounded-2xl mb-5">
                <TableHead>
                    <TableHeaderCell>Product Demand</TableHeaderCell>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell className="text-right">
                            Monsters Slayed
                        </TableHeaderCell>
                        <TableHeaderCell>Region</TableHeaderCell>
                        <TableHeaderCell>Status</TableHeaderCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    <TableRow>
                        <TableCell>Wilhelm Tell</TableCell>
                        <TableCell className="text-right">1</TableCell>
                        <TableCell>Uri, Schwyz, Unterwalden</TableCell>
                        <TableCell>National Hero</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>The Witcher</TableCell>
                        <TableCell className="text-right">129</TableCell>
                        <TableCell>Kaedwen</TableCell>
                        <TableCell>Legend</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Mizutsune</TableCell>
                        <TableCell className="text-right">82</TableCell>
                        <TableCell>Japan</TableCell>
                        <TableCell>N/A</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
    </div>
);

export default ProductDemandForecastView;