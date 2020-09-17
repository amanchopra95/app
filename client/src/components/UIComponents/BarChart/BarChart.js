import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {Bar} from 'react-chartjs-2'

import cls from './BarChart.module.css'

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: "Users",
        backgroundColor: '#333333',
        borderColor: '#333333',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 65, 59, 80, 81],
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    },
    scales: {
        xAxes: [
            {
                display: false,
                gridlines: {
                    display: false
                }
            }
        ],
        yAxes: [
            {
                display: false,
                gridlines: {
                    display: false
                }
            }
        ]
    }
}

const BarChart = (props) => {
    return (
        <Grid item lg={12}>
            <Paper className={cls['paper-card']}>
                <div className={cls['canvas-container']}>
                    <Bar data={data} options={options} />
                </div>
                <div className={cls['info']}>Targets </div>
                <div className={cls['number']}>Number</div>
            </Paper>
        </Grid>
    )
}

export default BarChart