import React from 'react'
import { Grid, Paper } from '@material-ui/core'

const Home = (props) => {
    return(
        <Grid container>
            <Grid item>
                <Paper>Dashboard</Paper>
            </Grid>
            <Grid item>
                <Paper>Form</Paper>
            </Grid>
        </Grid>
    )
}

export default Home