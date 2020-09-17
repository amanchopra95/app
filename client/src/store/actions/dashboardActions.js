import { LOAD_DATA, DATA_LOADED } from './actionTypes'
import axios from 'axios'

export const loadData = () => {
    return (dispatch) => {
        axios({
            url: '/data',
            method: 'GET',
        })
        .then((resp) => {
            dispatch({
                type: LOAD_DATA,
                payload: {...resp.data.data}
            })
        })
    }
}