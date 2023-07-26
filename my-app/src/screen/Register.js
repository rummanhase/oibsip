import React, { useState } from 'react';
import {Form , Card , Button, Container , Row , Col} from 'react-bootstrap';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPass, setConfPass] = useState("");

    function handleFormSubmit (){
        if(password !== confPass){
            alert('Password do not match')
        }else{
            const user = {name , email , password , confPass};
            console.log(user);
        }
    }
  return (
    <Container>
         <Card style={{ width: '40rem' }}>
            
        <Card.Body>
         <Card.Title>Please Register Here !!</Card.Title>
      <Form >
        
      <Row className="mb-3">
        <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" 
            placeholder="Enter Your Name"
            value = {name}
            onChange={(e)=> setName(e.target.value)}
            />
            </Form.Group>
        </Col>
        <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" 
            value = {email}
            onChange={(e)=> setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
             We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col md={6}>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" 
            value = {password}
            onChange={(e)=> setPassword(e.target.value)}/>
      </Form.Group>
        </Col>
        <Col md={6}> 
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" 
            value = {confPass}
            onChange={(e)=> setConfPass(e.target.value)}/>
      </Form.Group>
        
        </Col>
      </Row>
     
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary"
      onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </Container>
  )
}

export default Register