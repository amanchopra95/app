import { LOAD_DATA, DATA_LOADED } from '../actions/actionTypes'
import { loadData } from '../actions/dashboardActions'

const initialState = {}

export const dashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_DATA:
            return {
                ...state,
                ...action.payload
            }
        case DATA_LOADED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}