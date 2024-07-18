import { LineChart } from '@tremor/react';
import '@tremor/react/dist/components/layout-elements/Card/Card.js';
import { Card } from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 22',
        Actual: 2890,
    },
    {
        date: 'Feb 22',
        Actual: 2756,
        'Forecast': 2756
    },
    {
        date: 'Mar 22',
        'Forecast': 2194,
    },
];

const valueFormatter = function (number) {
    return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

const ForecastGraphView = () => {
    return (
        <>
            <div className="ml-20 mr-20 mt-7 justify-start">
                <Card
                    className="bg-dark-tremor-background">
                    <LineChart
                        className="h-screen"
                        data={chartdata}
                        index="date"
                        yAxisWidth={10}
                        categories={['Actual', 'Forecast']}
                        colors={['blue', 'red']}
                        valueFormatter={valueFormatter}
                        xAxisLabel="Month"
                        yAxisLabel="Revenue"
                        curveType="Natural"
                        tickGap={0}
                    />
                </Card>
            </div>
        </>
    );
}

export default ForecastGraphView;