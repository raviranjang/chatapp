import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom"
// import { Config } from "./Config"

import { checkAuth } from "../store/actions";

import { RenderRoutes } from "./RenderRoutes"
import { history } from "../config"

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      auth: true
    }
  }

  componentDidMount() {
    const currenntPath = history.location.pathname
    //check if the user was already logged in
    this.props.checkAuth(currenntPath)
    if (localStorage.getItem("authData")) {
      this.setState({ redirect: false })
    } else {
      this.setState({ redirect: true })
    }
  }

  render() {
    return (
      // <Config> 
        <Router history={history}>
          <RenderRoutes redirect={this.state.redirect} />
        </Router>
      // </Config>
    )
  }
}

export default connect(() => ({}), { checkAuth })(App);