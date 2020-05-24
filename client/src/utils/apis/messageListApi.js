// import axios from "axios"

// class messageListApi {
//     static requestHeaders() {
//         return {
//             'Content-Type': `application/json`,
//             'AUTHORIZATION': `${localStorage.authData}`
//         }
//     }
  
//     static getAllMessages(msgId) {
//         const headers = this.requestHeaders()
//         // get the list of pokemon from local json
//         return axios.get(`https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions/${msgId}/botmessage`, { headers })
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//             return err
//         })
//     }
//   }
  
//   export default messageListApi