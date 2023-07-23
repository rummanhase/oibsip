import React from 'react'
import Button from 'react-bootstrap/Button';
import {Card , Row , Col} from 'react-bootstrap';
import "../App.css"


function Pizza({pizza}) {
    let imageUrl = pizza.image;
    console.log(imageUrl , 'm');
  return (

    <Card style={{ width: '15rem' , marginTop:'3px'}}>
      <Card.Img variant="top" src={imageUrl} style={{ width: '14rem' ,margin:'auto' , height:"120px", marginBottom:'3px'}}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text><p>{pizza.description}</p></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">
            <Row>
                <Col md={6}>category</Col>
                <Col md={6}>{pizza.category}</Col>

            </Row>
        </Card.Subtitle>
        <Card.Text>
            <Row>
                <Col md={6}>
                    <h6>Varients</h6>
                    <select>
                        {pizza.varients.map((item)=>(
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                </Col>
                <Col md={6}>
                    <h6>Quantity</h6>
                    <select name="" id="">
                        {{...Array(10).keys().map((v,i)=>(
                            <option value={i+1} key={i}>{i+1}</option>
                        ))}}
                    </select>
                </Col>
            </Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default Pizza;