import React from "react";
import {Card, CardHeader, CardContent, Grid, Typography} from '@mui/material';

const NextMonthForecastView = ({forecastData, salesData}) => {
    return(
        <div className="card-container">
                <Card 
                    variant="contained"
                    style={{
                        backgroundColor: '#191919',
                    }}
                    elevation={3}
                    >
                    <CardHeader
                        className="card-header"
                        titleTypographyProps={
                            {variant:"body1"}
                        }
                        title="Next Month Forecast"
                        style={{
                            borderBottom:  "2px solid #ffffff",
                            height: "10px",
                        }} />
                    <CardContent 
                        className="card-content"
                        style={{
                            marginTop: '-10px',
                        }}
                    >
                    <Grid container spacing={2} rowSpacing={2}>
                        <Grid item xs={5} md={2.5}>
                            <Typography>
                                Month
                            </Typography>
                            <Typography>
                                {forecastData.month}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} md={3.1}>
                            <Typography>
                                Previous
                            </Typography>
                            <Typography>
                                {salesData.month[-1]}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} md={3.1}>
                            <Typography>
                                Projected
                            </Typography>
                            <Typography>
                                {forecastData.predictions[-1]}
                            </Typography>
                        </Grid>
                        <Grid item xs={5} md={3.1}>
                            <Typography>
                                % Change
                            </Typography>
                            <Typography>
                                {forecastData.change[-1]}
                            </Typography>
                        </Grid>
                    </Grid>
                    </CardContent>
                </Card>
            </div>
    )
}

export default NextMonthForecastView;