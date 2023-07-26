import React, { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import Pizza from '../components/Pizza';

function HomeScreen() {
    const dispatch = useDispatch();
    const getAllPizzaState = useSelector(state => state.getAllPizzaReducer);
    const { loading, pizzas, error } = getAllPizzaState;

    useEffect(() => {
        dispatch(getAllPizzas());
    }, [dispatch]);

    if (loading) {
        return (
            <div style={{textAlign:'center'}}> 
                <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
          );
    }

    if (error) {
        return <h1>Error while fetching allPizzas</h1>;
    }

    return (
        <Container className='my-home-page'>
            <Row>
                {pizzas && pizzas.map((pizza) => (
                    <Col md={3} key={pizza._id}>
                        <Pizza pizza={pizza} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomeScreen;
