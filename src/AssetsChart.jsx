import React from 'react';
import Chart from 'react-apexcharts';

export const AssetsChart = ({ data }) => {
    const chartOptions = {
        chart: {
            type: 'line',
            height: 350
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            title: {
                text: 'Assets'
            }
        }
    };

    const series = [{
        name: 'Assets',
        data: data.map(item => [item.date, item.amount])
    }];

    return <Chart options={chartOptions} series={series} type="line" height={350} />;
};

