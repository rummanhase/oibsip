import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {SiGooglestreetview , SiTwitter , SiInstagram} from 'react-icons/si'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'

function Contact() {
  return (
    <Container style={{marginTop:"30px" , width: '50rem' }} className='my-contact-page'>
        <Card>
      <Card.Img variant="top" src="https://www.bacinos.com/wp-content/uploads/2021/05/Recurring-and-ongoing-costs.jpg" />
      <Card.Body>
        <Card.Title>Warm greetings from "The Pizza Store"!</Card.Title>
        <Card.Text>
        <p>
        Dear Valued Customer,<br />
        We are thrilled to welcome you to our contact address, the heart of our culinary haven. As you step through our doors, be prepared to embark on a journey of flavors and experiences that will leave you craving for more.<br />
        Our team of passionate chefs and friendly staff is dedicated to making your visit exceptional. Whether you're here to savor our mouthwatering pizzas, indulge in our delectable pastas, or enjoy our delightful desserts, we promise to serve you with warmth and care.
        </p>
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Table striped bordered hover variant="dark" className='text-center'>
            <tbody>
        <tr>
          <td><SiGooglestreetview/></td>
          <td>Address</td>
          <td colSpan={2}>Street 2 , Mill Chowk Khalilabad , UP INDIA</td>
        </tr>
        <tr>
          <td><BsFillTelephoneFill/></td>
          <td>Phone</td>
          <td colSpan={2}>+91-987654321 / +91-9988776655</td>
        </tr>
        <tr>
          <td><SiTwitter/></td>
          <td >Twitter</td>
          <td>@rumman031</td>
        </tr>
        <tr>
          <td><SiInstagram/></td>
          <td>Instagram</td>
          <td colSpan={2}>@itz_rumman</td>
        </tr>
        <tr>
          <td><AiOutlineMail/></td>
          <td>G-mail</td>
          <td colSpan={2}>the_pizza_store@gmail.com</td>
        </tr>
            </tbody>
    </Table>
    </Container>
  );
}

export default Contact;