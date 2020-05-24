import React from "react"
import {Col, Button, Navbar, ButtonGroup} from "react-bootstrap"
import './style.css'

const Sidebar = props => {
    return (
        <>
            <Col sm="2" className="nav1 sectnbrdr">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                        alt=""
                        src={require('../../assets/header-logo.png')}
                        // width="30"
                        height="20"
                        className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Navbar>

                <ButtonGroup vertical>
                    <Button variant="dark"><i className="tb5-icon icon-custom"></i>
                        Button</Button>
                    <Button variant="dark">
                        <i className="intent-icon icon-custom"></i>
                        Intent</Button>

                    <Button variant="dark"><i className="entity-icon icon-custom"></i> 
                        Button</Button>
                    <Button variant="dark"><i className="training-icon icon-custom"></i> 
                        Button</Button>

                </ButtonGroup>

            </Col>
        </>  
    )
  }

  export default Sidebar