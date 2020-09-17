import React from 'react'
import { Grid, Paper, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return(
        <Container>
            <Grid container spacing={5} alignItems="center" justify="center" style={{"height": "100vh"}}>
                <Grid item>
                    <Paper style={{"padding": "25px"}}>
                        <Link to="/dashboard">Dashboard</Link>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{"padding": "25px"}}>
                        <Link to="/form">Form</Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home