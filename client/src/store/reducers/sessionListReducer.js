import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'
// import {browserHistory} from 'react-router';


const sessionListReducer = (state = initialState.sessionList, action) => {
    
    switch (action.type) {
        case actionTypes.LOAD_SESSIONLIST_SUCCESS:
            if(action && action.sessions && action.sessions.length) {
                state = []
                var updatedState = [...state, ...action.sessions]
                return updatedState
            } else {
                return [...state]
            }
        
        default:
            return state;
    }
}

export default sessionListReducer