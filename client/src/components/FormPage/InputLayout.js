import React from 'react'
import Grid from '@material-ui/core/Grid'
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

export default InputLayout