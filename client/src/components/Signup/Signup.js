import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Col, Form, Button, InputGroup} from 'react-bootstrap'
import { signUpInit } from '../../store/actions'
// import { history } from '../../config'
import { Route } from 'react-router-dom'
import './style.css'


const Signup = () => {

    const dispatch = useDispatch()

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        
        if (form.checkValidity() != false) {
            const formData = new FormData(event.target);
            let userInfo = {}
            for (var [key, value] of formData.entries()) {
                userInfo[key] = value
            }

            dispatch(signUpInit(userInfo))
        }
        
        event.stopPropagation()
        setValidated(true);
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Username</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control type="text" placeholder="Username" name="userName" aria-describedby="inputGroupPrepend" required />
                            <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" placeholder="Email" required />
                        <Form.Control.Feedback type="invalid">Please provide an email.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Button type="submit">Submit</Button>
                <Route render={({ history}) => (
                    <Button type="button" onClick={() => { history.push('/login') }}>Sign In</Button>
                )} />

            </Form>
        </div>
    )
}

export { Signup }