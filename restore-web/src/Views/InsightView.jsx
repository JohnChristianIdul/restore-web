import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const InsightView = ({insight}) => {

    return (
        <div>
            <Card
                variant="contained"
                className="forecastGraphCard"
                style={{
                    backgroundColor: '#292929',
                }}>

            <CardHeader 
                className="card-header"
                titleTypographyProps={
                    {variant:"body1"}
                }
                title="Insight"
                style={{
                    borderBottom:  "2px solid #ffffff",
                    height: "10px",
                }}/>

            <CardContent style={{ height: '100%'}}>
                <Typography>
                    {insight}
                </Typography>
            </CardContent>

            </Card>
        </div>
    )
}

export default InsightView;