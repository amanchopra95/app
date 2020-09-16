import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip'

const InputLayout = (props) => {
    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item col={6}>
                {props.children}
            </Grid>
            <Grid item col={6}>
                <Tooltip title={props.tooltip}>
                    <InfoOutlinedIcon style={{color: "#0ebded"}} />
                </Tooltip>
            </Grid>
        </Grid>
    )
}

const InputItem = (props) => {
    const { type, tooltip } = props

    switch(type) {
        case 'radio': 
            return (
                <InputLayout tooltip={tooltip}>
                    {props.children}
                </InputLayout>
            )
        case 'checkbox':
            return (
                <InputLayout tooltip={tooltip}>
                    {props.children}
                </InputLayout>
            )
        case 'text':
            return (
                <InputLayout tooltip={tooltip}>
                    <TextField {...props}/>
                </InputLayout>
            )
        default :
                return (
                    <InputLayout tooltip={tooltip}>
                        <TextField {...props} />
                    </InputLayout>
                )
    }
}

export default InputLayout