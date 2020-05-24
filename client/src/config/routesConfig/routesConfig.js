  
import { Signup } from "../../components/Signup"
import { Login } from '../../components/Login'

const routesConfig = [
    {
        path: "/register",
        component: Signup,
    },
    {
        path: "/login",
        component: Login
    }
    // ,
    // {
        
    // }

];



export { routesConfig };