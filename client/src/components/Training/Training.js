import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { loadSessions } from '../../store/actions'
import { loadMessages } from '../../store/actions'

import { Col, Navbar, Table } from 'react-bootstrap'
import './style.css'

const Training = props => {

  const sessionId = useSelector( state => state.authReducer )

  const trainingData = useSelector( state => state.sessionListReducer )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadSessions())
  }, [sessionId])

    return (
        <>
            <Col sm="4" className="sectnbrdr">
            
            <Navbar bg="dark" variant="dark" className="nav2">
              <Navbar.Brand href="#home">
                <img
                  src={require('../../assets/training-icon.svg')}
                  // width="30"
                  height="20"
                  className="d-inline-block align-top"
                />{' '}Training
              </Navbar.Brand>
            </Navbar>
          
            <Table>
              <thead>
                <tr>
                  <th>Session</th>
                  <th>User</th>
                  <th>Match/Fail</th>
                  <th>Date</th>
                  
                </tr>
              </thead>
              <tbody>
                { trainingData.map((data, i) => ( 
                    <tr key={i} onClick={e =>  {dispatch(loadMessages(data.id))}}  style={{cursor: 'pointer'}} >
                      <td>{data.trainStatus}</td>
                      <td>{'to ask'}</td>
                      <td>{data.count.hit}/{data.count.miss}</td>
                      <td>{data.updatedOn}</td>
                    </tr>
                ))}

              </tbody>
            </Table>

        </Col>
        </>
    )
}

export default Training