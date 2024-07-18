import React from 'react';
import '@tremor/react/dist/components/layout-elements/Card/Card.js';
import { Card } from '@tremor/react';

const ForecastCardView = () => {
    return (
        <Card
            className="mx-auto ml-12 mt-7 mb-3">
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-xl pb-3">Quarterly Sales</p>
            <p className="text-4xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,743</p>
            {/*<img src={}*/}
            {/*     className="image"*/}
            {/*    alt="image"/>*/}
        </Card>
    );
}

export default ForecastCardView;