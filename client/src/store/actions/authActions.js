import UserAuth from '../../utils/apis/auth'
import * as actionTypes from "./actionTypes";
// import { setLoading, setErrorMessage } from "./index";
import { history } from "../../config";

// action sent once the login api call is successfull
const loginAction = (data) => ({
  type: actionTypes.LOGIN,
  data
})


//action to initialize login
export function loginInit(userinfo) {
  // dispatch(setLoading(true)); //set loading state to true to show the spinner
    return function(dispatch) {
      return UserAuth.signIn(userinfo.email, userinfo.password)
      .then((res) => {
        //IIFE to destructure and create a new object
        const authData = (({
          token,
          __id,
          userName,
          email,
        }) => ({
          token,
          __id,
          userName,
          email,
        }))(res.data);

        dispatch(loginAction({ ...authData }));
        // dispatch(setLoading(false)); 
        //set loading to false once the user is logged in
        //or when there is response from the api

        //redirect new users to respective page based on any attribute like role or status once logged in
        redirectUser();
        const hashedData = btoa(JSON.stringify({ ...authData }))

        //setting the authentication related data to local storage
        localStorage.setItem("authData", hashedData);
        
      })
      .catch((err) => {
        console.log(err)
        // if (err.response && err.response.data) {
        //   const msg = err.response.data.responseMsg;
        //   dispatch(setLoading(false));
        //   if (msg) {
        //     dispatch(setErrorMessage(msg)); //set error message when the login attempt is failed
        //   } else {
        //     dispatch(setErrorMessage("Something went wrong"));
        //   }
        // } else {
        //   console.log(err.response);
        //   dispatch(setLoading(false));
        //   dispatch(setErrorMessage("Something went wrong"));
        // }
      })
    }
}

const redirectUser = () => history.push("/register")


//action to check authentication status of user
export const checkAuth = (currentPath) => (dispatch) => {
  const authData = localStorage.getItem("authData");
  if (authData) {
    const userData = JSON.parse(atob(authData));
    dispatch(loginAction(userData));

    if (currentPath === "/") {
      redirectUser();
    }

    // dispatch(getNotificationsCount(userData.token, userData.userName));
  } else {
    if(currentPath == "/register") {
      history.push("/register")
    } else {
      history.push("/login")
    }
  }
}



//main logout action to clear store. sent once logout api call is successfull
export const logoutAction = () => (dispatch) => {
  localStorage.removeItem("authData");
  //change back to login page
  dispatch({
    type: actionTypes.LOGOUT,
  });
  history.push("/login");
}



// action to initialize logout
// export const logoutInit = (token) => (dispatch) => {
//   //remove authentication data from store
//   dispatch(logoutAction());
//   //remove authentication data from local storage
//   axiosLogout({
//     method: "GET",
//     data: {},
//     params: {
//       token,
//     },
//   })
//     .then(() => {
//       console.log("logged from server");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };


//action to initialize login
export function signUpInit(userinfo) {
  console.log("called", userinfo)
  // dispatch(setLoading(true)); //set loading state to true to show the spinner
    return function(dispatch) {
      return UserAuth.signUp(userinfo.email, userinfo.password, userinfo.userName)
      .then((res) => {
        //IIFE to destructure and create a new object
        const authData = (({
          token,
          __id,
          userName,
          email,
        }) => ({
          token,
          __id,
          userName,
          email,
        }))(res.data);

        dispatch(loginAction({ ...authData }));
        // dispatch(setLoading(false)); 
        //set loading to false once the user is logged in
        //or when there is response from the api

        //redirect new users to respective page based on any attribute like role or status once logged in
        redirectUser();
        const hashedData = btoa(
          JSON.stringify({ ...authData })
        );

        //setting the authentication related data to local storage
        localStorage.setItem("authData", hashedData);
        
      })
      .catch((err) => {
        console.log(err)
        // if (err.response && err.response.data) {
        //   const msg = err.response.data.responseMsg;
        //   dispatch(setLoading(false));
        //   if (msg) {
        //     dispatch(setErrorMessage(msg)); //set error message when the login attempt is failed
        //   } else {
        //     dispatch(setErrorMessage("Something went wrong"));
        //   }
        // } else {
        //   console.log(err.response);
        //   dispatch(setLoading(false));
        //   dispatch(setErrorMessage("Something went wrong"));
        // }
      })
    }
}
