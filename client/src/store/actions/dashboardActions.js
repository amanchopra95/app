import { LOAD_DATA, DATA_LOADED, DATA_NOT_LOADED } from './actionTypes'
import axios from 'axios'

export const loadData = () => {
    return (dispatch) => {
        axios({
            url: '',
            method: 'GET',
        })
        .then((resp) => {
            disptach({
                type: DATA_LOADED,
                payload: {...resp.data}
            })
        })
        .catch((err) => {
            dispatch({
                type: DATA_NOT_LOADED
            })
        })
    }
}