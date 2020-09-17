import { LOAD_DATA, DATA_LOADED, DATA_NOT_LOADED } from './actionTypes'
import axios from 'axios'

export const loadData = () => {
    return (dispatch) => {
        axios({
            url: '/data',
            method: 'GET',
        })
        .then((resp) => {
            disptach({
                type: DATA_LOADED,
                payload: {...resp.data.data}
            })
        })
        .catch((err) => {
            dispatch({
                type: DATA_NOT_LOADED
            })
        })
    }
}