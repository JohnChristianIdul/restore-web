import React from 'react';
import { LineChart } from '@tremor/react';
import { Card } from '@tremor/react';

const ForecastGraphView = ({ graphData, isLoading, error, onCardClick }) => {
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const valueFormatter = (number) => {
        return '$ ' + new Intl.NumberFormat('us').format(number).toString();
    };

    const customTooltip = (props) => {
        const { payload, active } = props;
        if (!active || !payload || payload.length === 0) return null;

        return (
            <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
                {payload.map((category, idx) => {
                    const isLastElement = category.value === graphData.line_graph_data[3].Sales;
                    const color = isLastElement ? 'red' : category.color;
                    const dataKey = isLastElement ? 'Forecast' : category.dataKey;

                    return (
                        <div key={idx} className="flex flex-1 space-x-2.5">
                            <div className={`flex w-1 flex-col bg-${color}-500 rounded`} />
                            <div className="space-y-1">
                                <p className="text-tremor-content">{dataKey}</p>
                                <p className="font-medium text-tremor-content-emphasis">
                                    {category.value}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="ml-20 mr-20 mt-7 mb-2 justify-start">
            <Card className="bg-dark-tremor-background" onClick={onCardClick}>
                <LineChart
                    className="h-screen mt-4 p-4"
                    data={graphData.line_graph_data}
                    index="Month"
                    yAxisWidth={65}
                    categories={['Sales']}
                    valueFormatter={valueFormatter}
                    xAxisLabel="Month"
                    yAxisLabel="Revenue"
                    showLegend={false}
                    showAnimation={true}
                    customTooltip={customTooltip}
                />
            </Card>
        </div>
    );
};

export default ForecastGraphView;
