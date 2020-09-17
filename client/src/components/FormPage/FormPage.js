import React from 'react'
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
                                    <InputLayout tooltip="Please enter index of label column">
                                        <TextField 
                                            helperText="Label Column"
                                            label="Index of Label Column"
                                        />
                                    </InputLayout>
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
                                    <InputLayout tooltip="Please enter Index of Label Column">
                                        <TextField 
                                            helperText="Label Column"
                                            label="Index of Label Column"
                                        />
                                    </InputLayout>
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
                                    <InputLayout tooltip="Enter Hyperparameter Tuning">
                                        <FormLabel>Hyperparameter Tuning</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                                        </RadioGroup>
                                    </InputLayout>
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Enter K Fold Flag">
                                        <FormLabel>K Fold Flag</FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel value="Yes" control={<Radio color="primary" />} label="Yes" />
                                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                                        </RadioGroup>
                                    </InputLayout>
                                    
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Enter Train Test Spllit Type">
                                    <TextField 
                                        helperText="Label Column"
                                        label="Train Test Spllit Type"
                                    />
                                    </InputLayout>
                                    
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Enter Training Data Percentage">
                                    <TextField 
                                        helperText="Label Column"
                                        label="Training Data Percentage"
                                    />
                                    </InputLayout>
                                    
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Enter Test Data Percentage">
                                    <TextField 
                                        helperText="Label Column"
                                        label="Test Data Percentage"
                                    />
                                    </InputLayout>
                                    
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Enter Maximum Depth of Tree">
                                    <TextField 
                                        helperText="Label Column"
                                        label="Maximum Depth of Tree"
                                    />
                                    </InputLayout>
                                </Grid>
                                <Grid item col={12}>
                                    <InputLayout tooltip="Enter Minimum Number of Bins">
                                    <TextField 
                                        helperText="Label Column"
                                        label="Minimum Number of Bins"
                                    />
                                    </InputLayout>
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
