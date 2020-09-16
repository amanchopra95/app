import React, { useState } from 'react'
import cls from './FormPage.module.css'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InputLayout from './InputLayout'

const FormPage = (props) => {

    return (
        <Container style={{ 'height': '100vh', 'padding': '15px' }}>
            <Grid style={{ 'height': '100%', 'padding': '15px' }} container justify="center" alignItems="center" spacing={5}>
                <Grid item lg={6}>
                    <Card className={cls.paper}>
                        <CardHeader disableTypography className={cls['card-title']} title="Input Params" />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Index of Label Column"
                                    />
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Please select Yes or No">
                                        <FormLabel>Input Box</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                                        </RadioGroup>
                                    </InputLayout>
                                </Grid>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Index of Label Column"
                                    />
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout 
                                        tooltip="Info about the input"
                                    >
                                        <TextField helperText="Wowo"/>
                                    </InputLayout>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item lg={6}>
                    <Card className={cls.paper}>
                        <CardHeader disableTypography className={cls['card-title']} title="Algo Params" />
                        <CardContent>
                            <Grid container direction="column" spacing={2}>
                                <Grid item col={12}>
                                    <FormLabel>Hyperparameter Tuning</FormLabel>
                                    <RadioGroup row>
                                        <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item col={12}>
                                    <FormLabel>K Fold Flag</FormLabel>
                                    <RadioGroup row>
                                        <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                                        <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                                    </RadioGroup>
                                </Grid>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Train Test Spllit Type"
                                    />
                                </Grid>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Training Data Percentage"
                                    />
                                </Grid>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Test Data Percentage"
                                    />
                                </Grid>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Maximum Depth of Tree"
                                    />
                                </Grid>
                                <Grid item col={12}>
                                    <TextField 
                                        helperText="Label Column"
                                        label="Minimum Number of Bins"
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FormPage
