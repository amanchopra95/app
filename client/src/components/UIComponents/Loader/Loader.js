import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

const Loader = (props) => {
    return (
        <Grid container alignItems="center">
            <Grid item>
                <CircularProgress />
            </Grid>
        </Grid>
    )
}

export default Loader