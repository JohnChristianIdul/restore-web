import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { Card, CardContent, Typography } from "@mui/material";

const ForecastGraphView = ({forecastData, salesData}) => {

    return(
        <div>
            <Card
                variant="contained"
                className="forecastGraphCard"
                style={{
                    backgroundColor: '#292929',
                }}
                >
                <CardContent style={{ height: '100%', }}>

                    <div style={{marginTop: '20px'}}>
                    <div style={{display: 'inline-flex', justifyContent: 'space-between'}}>
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#3463E1', borderRadius: '100%', marginTop: '5px'}} />
                        <Typography variant="h6" style={{color: 'white', marginLeft: '10px', marginRight: '50px'}}>
                            Actual Sales
                        </Typography>
                        <div style={{ width: '20px', height: '20px', backgroundColor: '#F52525', borderRadius: '100%', marginTop: '5px'}} />
                        <Typography variant="h6" style={{color: 'white', marginLeft: '10px'}}>
                            Forecasted
                        </Typography>
                    </div>
                    </div>
                    
                    <VictoryChart
                    theme={VictoryTheme.material}
                    height={300}
                    width={500}
                    padding={{top: 0, right: 20, left: 60, bottom: 50}}
                    domainPadding={{ y: [0, 20] }} 
                    >
                    <VictoryLine
                        data={salesData}
                        style={{
                        data: {stroke: '#3463E1'},
                        parent: { border: "2px solid #ccc"}
                        }}
                        animate={{
                        duration: 1000,
                        onLoad: { duration: 1000 }
                        }}
                    />
                    <VictoryLine
                        data={forecastData}
                        style={{
                        data: {stroke: '#F52525'},
                        parent: { border: "2px solid #ccc"}
                        }}
                        animate={{
                        duration: 1000,
                        onLoad: { duration: 1000 }
                        }}
                    />
                    </VictoryChart>
                </CardContent>
            </Card> 
        </div>
    )
}

export default ForecastGraphView;