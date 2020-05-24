import * as actionTypes from './actionTypes'
import messageListApi from '../../utils/apis/messageListApi'

  export function loadMessageListSuccess(messages) {
    return {type: actionTypes.LOAD_SESSIONLIST_SUCCESS, messages}
  }

  export function loadMessages(messageId) {
    
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch) {
      return messageListApi.getAllMessages(messageId)
      .then(messages => {
        dispatch(loadMessageListSuccess(messages))
      }).catch(error => {
        throw(error)
      })
    };
  }
