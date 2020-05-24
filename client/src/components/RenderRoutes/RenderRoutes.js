import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { routesConfig } from "../../config";
import { useSelector } from "react-redux";
//function to check authentication status
import { authStatus } from "../../utils";
// import { WelcomeScreen } from "../WelcomeScreen";
import { Login } from '../Login'
import { Signup } from '../Signup'

// const Login = lazy(() =>
//   import(`../Login`)
// )

const RenderRoutes = (props) => {
  const { redirect } = props;
  console.log(redirect)
  
  const token = useSelector(({ authReducer }) => authReducer.token);

  let routesList = null;
  const renderRoutes = () => {
    console.log("inside")
    if (authStatus(token)) {
      console.log("authtoken found")
        // if we need to have routes based on some user attributes like role, etc.
        const userRoutes = routesConfig
        let i = null;
        routesList =
          userRoutes &&
          userRoutes.map((route, index) => {
            i = index;
            return (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            );
          });
        routesList.push(
          <Route
            key={i + 1}
            component={() => (
              <div className="primary-container" style={{ marginTop: "75px" }}>
                page not found...
              </div>
            )}
          />
        );

        return (
          // <Layout>
            <Switch>{routesList}</Switch>
          // </Layout>
        );
      
    } else {
      return (
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route key="1" exact path="/login" component={Login} />
            <Route key="2" exact path="/register" component={Signup} />
            
            { redirect && <Redirect to="/login" /> }
          </Switch>
        </Suspense>
      );
    }
  };

  return <>{renderRoutes()}</>;
};

export { RenderRoutes }