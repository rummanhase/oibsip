import React ,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Card , Row , Col , Form} from 'react-bootstrap';
import {FaRupeeSign} from "react-icons/fa"
import "../App.css";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from 'react-redux';
let arr = [1,2,3,4,5,6,7,8,9,10];


function Pizza({pizza}) {
    const [varient , setVarient] = useState('small');
    const [quant , setQuant] = useState(1);

    const dispatch = useDispatch()
   
    const addToCartHandler = () => {
        dispatch(addToCart(pizza , varient , quant))
      }

  return (

    <Card style={{ width: '15.8rem' , marginTop:'3px'}}>
      <Card.Img variant="top" src={pizza.image} style={{ width: '14rem' ,margin:'auto' , height:"120px", marginBottom:'3px'}}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title> <hr/>
        <Card.Text className="mb-2 text-muted"><p style={{fontSize:'small'}}>{pizza.description}</p></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
            <Row>
                <Col md={5}>category</Col>
                <Col md={5}>{pizza.category}</Col>

            </Row>
        </Card.Subtitle>
        <Card.Text>
            <Row>
                <Col md={6}>
                    <h6>Varients</h6>
                    <Form.Select size="sm" aria-label="Default select example" value={varient} onChange={(e) => setVarient(e.target.value)}>
                        {pizza.varients.map((varient) => (
                        <option key={varient} value={varient}>
                            {varient}
                        </option>
                    ))} 
                    </Form.Select>
        
                </Col>
                <Col md={6}>
                    <h6>Quantity</h6>
                    <Form.Select size="sm" aria-label="Default select example" value={quant} 
                        onChange={(e) => setQuant(e.target.value)}> 
                        {arr.map((val, key) => (
                            <option key={key + 1} value={key + 1}>
                                {key + 1}
                            </option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>
        </Card.Text>
        <Row>
            <Col md={6}>
                <h6>Cost : <FaRupeeSign/> {pizza.prices[0][varient] * quant}</h6>
            </Col>

            <Col md={6}>
            <Button 
            onClick={addToCartHandler}
            variant="outline-success" size="sm">Add to Cart</Button>
            </Col>
        </Row>
        
      </Card.Body>
    </Card>
  );
}


export default Pizza;