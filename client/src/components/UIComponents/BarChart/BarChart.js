import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import {Bar} from 'react-chartjs-2'

import cls from './BarChart.module.css'

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
                    <Bar data={props.data} options={options} />
                </div>
                <div className={cls['info']}>Targets </div>
                <div className={cls['number']}>Number</div>
            </Paper>
        </Grid>
    )
}

export default BarChart