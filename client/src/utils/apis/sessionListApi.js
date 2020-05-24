// import axios from "axios"

// class sessionListApi {
//     static requestHeaders() {
//         return {
//             'Content-Type': `application/json`,
//             'AUTHORIZATION': `${localStorage.authData}`
//         }
//     }
  
//     static getAllSessions(agentId) {
//         const headers = this.requestHeaders()
//         // axios.defaults.headers.common['Authorization'] = `${localStorage.authData}`
//         return axios.get("https://test-lbadmin-m.enterprisebot.co/api/v2/botsessions?filter=%7B%22limit%22%3A20%2C%22skip%22%3A0%2C%22order%22%3A%22id%20DESC%22%2C%22where%22%3A%7B%22agentId%22%3A%225bcee5bafe751a289f6154cf%22%7D%7D", {headers})
//         .then(res => {
//             return res.data
//         })
//         .catch(err => {
//             return err
//         })
//     }
//   }
  
//   export default sessionListApi