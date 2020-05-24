import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState'


const messageListReducer = (state = initialState.messageList, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.LOAD_SESSIONLIST_SUCCESS:
                if(!action || !action.messages) return state
                state = []
                let filteredState = [...state,...action.messages]
                filteredState = filteredState.filter(t => {
                     return t.response && t.response.replies
                })
                return (
                    filteredState
                )

        default:
            return state;
    }
}

export { messageListReducer }