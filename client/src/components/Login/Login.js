import React, { useState, setState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { loginInit } from '../../store/actions'
// import { history } from '../../config'
import { Route } from 'react-router-dom'
import './style.css'

const Login = () => {
    const dispatch = useDispatch()
    const [validated, setValidated] = useState(false);

    // const handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.name === 'isGoing' ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState({
    //       [name]: value
    //     });
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        
        if (form.checkValidity() != false) {
            const formData = new FormData(event.target);
            let userInfo = {}
            for (var [key, value] of formData.entries()) {
                userInfo[key] = value
            }

            dispatch(loginInit(userInfo))
        }
        
        event.stopPropagation()
        setValidated(true);
    }

    return (
        <Row className="justify-content-md-center mainContainer">
            <Form noValidate validated={validated} className="loginForm" onSubmit={handleSubmit}>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="email" type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control name="password" type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
     

                <Form.Group as={Row}>
                    {/* <Col sm={{ span: 10, offset: 2 }}> */}
                        <Button type="submit">Sign in</Button>
                    {/* </Col> */}
                    {/* <Col sm={{ span: 10, offset: 2 }}> */}
                        <Route render={({ history}) => (
                            <Button type="button" onClick={() => { history.push('/register') }}>Sign Up</Button>
                        )} />
                    {/* </Col> */}
                </Form.Group>
            </Form>
        </Row>
    )
}

export { Login }