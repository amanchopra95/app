import React from 'react'
import cls from './Dashboard.module.css'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import background from '../../assets/images/background.png'
import NumericalStat from '../UIComponents/NumericalStat/NumericalStat'
import LineChart from '../UIComponents/LineChart/LineChart'
import BarChart from '../UIComponents/BarChart/BarChart'

const useStyles = makeStyles({
    backgroundImage: {
        backgroundImage: `linear-gradient(180deg, transparent, rgb(12, 42, 62)),url(${background})`,
        padding: 0,
        width: '100%',
        height: '100vh'
    }
})

const Dashboard = (props) => {

    const styles = useStyles()

    return (
        <div style={{'background-color': 'rgb(12, 42, 62)', 'width': '100%'}}>
            <Grid container>
                <Grid item lg={9} className={[styles.backgroundImage, cls['mx-0']].join(' ')} >
                    <h4 className={cls['heading']}>CMO Dashboard</h4>
                    <Grid container spacing={6} alignItems="center" style={{'padding': '0 24px'}}>
                        <NumericalStat title="Revenue" value="23,440" />
                        <NumericalStat title="Revenue" value="23,440" />
                        <NumericalStat title="Revenue" value="23,440" />
                        <NumericalStat title="Revenue" value="23,440" />
                    </Grid>
                    <Grid container spacing={6} style={{'padding': '0 24px'}}>
                        <LineChart />
                        <LineChart />
                        <LineChart />
                        <LineChart />
                    </Grid>
                </Grid>
                <Grid item lg={3} className={[cls.bgBlue, cls['mx-0']].join(' ')}>
                    <Grid container spacing={3} justify="center" style={{'padding' : '0 12px'}}>
                        <h4 className={cls['sub-head']}>Selected Period this month</h4>
                        <BarChart />
                        <BarChart />
                        <BarChart />
                        <BarChart />
                        <BarChart />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard