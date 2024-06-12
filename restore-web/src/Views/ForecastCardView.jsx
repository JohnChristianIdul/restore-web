import React from "react";
import { Card, Typography, CardContent, CardHeader } from "@mui/material";

const ForecastCardView = ({ forecastText }) => {
  return (
    <div className="card-container">
      <Card
        variant="contained"
        style={{ backgroundColor: "#30A75F" }}
        className="card"
        elevation={3}
      >
        <CardHeader
          className="card-header"
          titleTypographyProps={{ variant: "body1" }}
          title="Quarterly Sales"
        />
        <CardContent>
          <Typography variant="h4" className="card-content">
            {forecastText ? `$${forecastText}` : "$Placeholder"}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForecastCardView;