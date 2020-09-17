import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cls from './Dashboard.module.css'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import background from '../../assets/images/background.png'
import NumericalStat from '../UIComponents/NumericalStat/NumericalStat'
import LineChart from '../UIComponents/LineChart/LineChart'
import BarChart from '../UIComponents/BarChart/BarChart'

import { loadData } from '../../store/actions/dashboardActions'

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
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadData())
    }, [dispatch])

    return (
        <div style={{'backgroundColor': 'rgb(12, 42, 62)', 'width': '100%'}}>
            <Grid container>
                <Grid item lg={9} className={[styles.backgroundImage, cls['mx-0']].join(' ')} >
                    <h4 className={cls['heading']}>CMO Dashboard</h4>
                    <Grid container spacing={6} alignItems="center" style={{'padding': '0 24px'}}>
                        {
                            data.numericalStat ? 
                                data.numericalStat.map((chart, i) => <NumericalStat title={chart[0]} value={chart[1]} key={`numericalStat_${i}`} />)
                                :
                                null
                        }
                    </Grid>
                    <Grid container spacing={6} style={{'padding': '0 24px'}}>
                        {   data.lineChart ? 
                                data.lineChart.map((chart, i) => 
                                        <LineChart data={chart} key={`lineChar_${i}`} />
                                ) :
                                null
                        }
                    </Grid>
                </Grid>
                <Grid item lg={3} className={[cls.bgBlue, cls['mx-0']].join(' ')}>
                    <Grid container spacing={3} justify="center" style={{'padding' : '0 12px'}}>
                        <h4 className={cls['sub-head']}>Selected Period this month</h4>
                        {
                            data.barChart ? 
                                data.barChart.map((chart, i) => <BarChart data={chart} key={`barChar_${i}`} />)
                                : null
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dashboard