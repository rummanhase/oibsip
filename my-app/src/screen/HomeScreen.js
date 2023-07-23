import React from 'react'
import AllPizza from "../data/data"
import {Container , Row , Col} from 'react-bootstrap'
import Pizza from '../components/Pizza'

function HomeScreen() {
  return (
    <>
        <Container className='my-home-page'>
            <Row>
                {
                    AllPizza.map((pizza)=>(
                        <Col md={3}>
                            <Pizza pizza={pizza}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </>
  )
}

export default HomeScreen