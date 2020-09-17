import { DATA_LOADED } from '../actions/actionTypes'

const initialState = {}

export const dashboardReducer = (state = initialState, action) => {
    switch(action.type) {
        case DATA_LOADED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}