import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import Table from "rc-table";

const ProductDemandForecastView = ({forecastData}) => {
    const columns = [
        {
            title: 'Product ID',
            dataIndex: 'productId',
            key: 'productId',
            align: 'center',
            width: 200,
        },
        {
            title: 'Product Name',
            dataIndex: 'productName',
            key: 'productName',
            align: 'center',
        },
        {
            title: 'Projected Demand',
            dataIndex: 'projectedDemand',
            key: 'projectedDemand',
            align: 'center',
        },
    ];

    const handleTableClick = (event) => {
        //TODO: Open Table Modal
    }

    return (
        <div>
            <Card
                variant="contained"
                style={{
                    backgroundColor: '#191919',
                    marginTop: '10px'
                }}
                elevation={3}
                onClick={handleTableClick}
            >
                <CardHeader 
                    className="card-header"
                    titleTypographyProps={
                        {variant:"body1"}
                    }
                    title="Product Demand"
                    style={{
                        borderBottom:  "2px solid #ffffff",
                        height: "10px",
                    }}
                />
                <CardContent>
                    <Table 
                        columns={columns}
                        data={forecastData}
                        rowKey="productId"
                        className="table-productdemand"
                        style={{
                            marginTop: '-10px',
                        }}
                    />
                </CardContent>
            </Card>
        </div>
    );
}

export default ProductDemandForecastView;