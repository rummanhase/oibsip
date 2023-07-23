import React from 'react';
import {Container , Row , Col} from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import "../App.css"

function About() {
  return (
    <Container style={{marginTop:"30px"}} className='my-about-page'>
      <h1>Welcome to "The Pizza Store"!</h1>
      <p>At The Pizza Store, we are more than just a pizza store – we are passionate creators of delightful culinary experiences. As a family-owned and operated pizzeria, we take immense pride in serving the finest handcrafted pizzas in town.
      </p>
      <h3>About Us</h3>
<Row>
      <Col md={6}>
        <p>
        Our story began with a simple dream – to share the joy of       authentic,    mouthwatering pizzas with our community. Every day, we combine the finest ingredients, the expertise of our skilled pizzaiolos, and a pinch of love to craft pizzas that are as unique as they are delicious.Here at The Pizza Store, we believe that great food starts with the freshest ingredients. That's why we carefully source our produce from local suppliers and use only the highest quality cheeses and meats. Our commitment to quality ensures that each bite you take is a burst of flavors that will keep you coming back for more.
        </p>
      </Col>
      <Col md={6}>
        <p>
        Whether you're looking for a quick bite, a memorable family dinner, or a place to celebrate with friends, The Pizza Store is the perfect destination. Join us on this flavorsome journey, and experience the true essence of pizza craftsmanship.
        <br/> Thank you for being a part of our story. We look forward to serving you and creating cherished memories together. Yours sincerely
        </p>
      </Col>
</Row>
<Row>
  <h3>Our Chefs</h3>
  <Col md={3}>
  <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526670303qwiib.png" />
      <Card.Body>
        <Card.Title>Chef Maria:</Card.Title>
        <Card.Text>
         With a heritage of Italian culinary mastery, Maria brings her family's secret pizza recipes to life. Her skillful dough tossing and artful toppings create pizzas that transport you to the streets of Naples.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  <Col md={3}>
  <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.BC4MVeQXR1EWXvMWxd70jwHaJM?pid=ImgDet&rs=1" />
      <Card.Body>
        <Card.Title>
         Chef Alejandro: </Card.Title>
        <Card.Text>Hailing from Mexico, Alejandro infuses his pizzas with bold flavors and creative twists. His fusion of Latin spices and traditional Italian techniques results in a tantalizing burst of tastes in every slice.
        </Card.Text>
      </Card.Body>
    </Card></Col>
  <Col md={3}>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://purepng.com/public/uploads/large/purepng.com-chefcheftrained-professional-cookfood-preparationkitchenchefsexperienced-1421526669807fgp5t.png" />
      <Card.Body>
        <Card.Title>Chef Hiroshi: </Card.Title>
        <Card.Text>A sushi chef turned pizza maestro, Hiroshi brings precision and elegance to the craft. His finesse with ingredients and eye for detail create visually stunning and palate-pleasing pizza creations.
        </Card.Text>
      </Card.Body>
    </Card></Col>
  <Col md={3}>
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.f7KUQe9NhYTnICE8fqCgLwAAAA?pid=ImgDet&w=352&h=576&rs=1" />
      <Card.Body>
        <Card.Title>Chef Isabella: </Card.Title>
        <Card.Text>A culinary prodigy from France, Isabella's innovative approach to pizza elevates it to gourmet heights. Her use of unique ingredients and exquisite presentation turn pizzas into edible works of art.
        </Card.Text>
      </Card.Body>
    </Card></Col>
</Row>
    </Container>
  )
}

export default About;