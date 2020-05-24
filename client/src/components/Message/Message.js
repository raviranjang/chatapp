import React from 'react'
import {Col, Navbar} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import './style.css'

const Message = props => {

    const sessionList = useSelector( state => state.sessionListReducer )
    // const [currentSession, setCurrentState] = useState("")
    const messageData = useSelector( state => state.messageListReducer )
  
    const dispatch = useDispatch()
    
    return (
        <>
            <Col sm="6" className="sectnbrdr">

                <Navbar bg="dark" variant="dark" className="nav2">
                <Navbar.Brand href="#home">
                    <img
                    src={require('../../assets/chat-icon.svg')}
                    // width="30"
                    height="20"
                    className="d-inline-block align-top"
                    />{' '}Chat Session
                </Navbar.Brand>
                </Navbar>



                <div>
                {
                    messageData.map((msg,i) => (
                    <div key={i}>
                        {/* <div style={{width: '65%'}}> */}
                        <div key={'user'+i} className="chat-section">
                            <div className="chat-message">
                            <p className="msg">{msg.userSays}</p>
                            </div>
                            <p>You: {msg.createdOn}</p>
                        </div>
                        {/* </div> */}

                        {/* <div style={{width: '65%'}}> */}
                        <div key={'bot'+i} className="chat-section bot-chat">
                            <div className="chat-message-bot">
                            <p className="bot-msg">{msg.response.replies[0]}</p>
                            <p>Bot: {msg.response.ts}</p>
                            </div>
                        </div>
                        {/* </div> */}
                        
                    </div>
                    ))
                }

                </div>

                </Col>
        </>
    )
}

export default Message