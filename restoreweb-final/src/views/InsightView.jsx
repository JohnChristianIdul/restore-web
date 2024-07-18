import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionList,
} from '@tremor/react';
import '@tremor/react/dist/components/layout-elements/Card/Card.js';
import { Card } from '@tremor/react';

const InsightView = () => {
    return (
        <>
            <div className="ml-12 mt-2 mb-5 w-full">
                <AccordionList >
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Accordion 1</AccordionHeader>
                        <AccordionBody className="leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            tempor lorem non est congue blandit. Praesent non lorem sodales,
                            suscipit est sed, hendrerit dolor.
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Accordion 2</AccordionHeader>
                        <AccordionBody className="leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            tempor lorem non est congue blandit. Praesent non lorem sodales,
                            suscipit est sed, hendrerit dolor.
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                        <AccordionHeader className="text-sm font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">Accordion 3</AccordionHeader>
                        <AccordionBody className="leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                            tempor lorem non est congue blandit. Praesent non lorem sodales,
                            suscipit est sed, hendrerit dolor.
                        </AccordionBody>
                    </Accordion>
                </AccordionList>
            </div>
        </>
    );
}

export default InsightView;