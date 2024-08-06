import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,
} from '@tremor/react';
import '@tremor/react/dist/components/layout-elements/Card/Card.js';

const InsightView = (insight, isLoading, error) => {
    return (
        <>
            <h1 className="ml-16 mt-14 text-2xl font-bold">Insight</h1>
            <div className="ml-12 mt-2 mb-5 w-full">
                <AccordionList >
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong text-xl">Sales Period</AccordionHeader>
                        <AccordionBody className="leading-6">
                            {insight && insight.insight && insight.insight.Low_Sales_Period && insight.insight.Peak_Sales_Period? (
                                <>
                                    <p className="text-xl"><strong>Low Sales Period:</strong> {insight.insight.Low_Sales_Period}</p>
                                    <p className="text-xl"><b>Peak Sales Period:</b> {insight.insight.Peak_Sales_Period}</p>
                                </>
                            ) : (<p>Fetching Data</p>)}
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong text-xl">Seasonal Fluctuations</AccordionHeader>
                        <AccordionBody className="leading-6">
                            {insight && insight.insight && insight.insight.Seasonal_Fluctuation ? (
                                insight.insight.Seasonal_Fluctuation.split('- ')
                                    .filter(item => item.trim() !== '')
                                    .map((item, index) => (
                                        <p key={index} className="text-xl mb-2">- {item.trim()}</p>
                                    ))
                            ) : (
                                <p>Fetching Data</p> )}
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong text-xl">Potential External Factors</AccordionHeader>
                        <AccordionBody className="leading-6">
                            {insight && insight.insight && insight?.insight?.['-_Economic_conditions'] && insight?.insight?.['-_Consumer_behavior'] && insight?.insight?.['-_Weather_and_climate'] ? (
                                <>
                                    <p className="text-xl"><strong>Conditions:</strong> {insight?.insight?.['-_Economic_conditions']} </p>
                                    <p className="text-xl"><strong>Consumer Behavior:</strong> {insight?.insight?.['-_Consumer_behavior']}</p>
                                    <p className="text-xl"><strong>Weather and Climate:</strong> {insight?.insight?.['-_Weather_and_climate']}</p>
                                </>) : (
                                    <p>Fetching Data</p>
                            )}
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong text-xl">Abrupt Fluctuations</AccordionHeader>
                        <AccordionBody className="leading-6">
                            {insight && insight.insight && insight.insight.Abrupt_Fluctuations ? (
                                <p className="text-xl">{insight.insight.Abrupt_Fluctuations}</p>
                            ) : (
                                <p>Fetching Data</p>
                            )
                            }
                        </AccordionBody>
                    </Accordion>
                </AccordionList>
            </div>
        </>
    );
}

export default InsightView;