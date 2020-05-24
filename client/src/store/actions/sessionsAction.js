import * as actionTypes from './actionTypes'
import sessionListApi from '../../utils/apis/sessionListApi'

  export function loadSessionListSuccess(sessions) {
    return {type: actionTypes.LOAD_SESSIONLIST_SUCCESS, sessions}
  }

  // create a error handler reducer function also

  export function loadSessions(agentId) {
    // if(sessionId && sessionId == "") return
    // console.log(agentId)
    // make async call to api, handle promise, dispatch action when promise is resolved
    return function(dispatch, agentId) {
      return sessionListApi.getAllSessions(agentId)
      .then(sessions => {
        dispatch(loadSessionListSuccess(sessions))
      }).catch(error => {
        // handle error scenario- like can retry or show error msg to user
        throw(error)
      })
    };
  }
