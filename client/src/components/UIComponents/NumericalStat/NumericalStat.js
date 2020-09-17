import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import cls from './NumericalStat.module.css'

const NumericalStat = (props) => {
    return (
        <Grid item lg={3}>
            <Paper className={cls.statsCard}>
                <p>{props.title}</p> 
                <h3>&#8377; {props.value}</h3>
            </Paper>
        </Grid>
    )
}

export default NumericalStat