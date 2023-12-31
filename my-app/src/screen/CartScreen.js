import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Badge,
  Image,
  Button,Card
} from "react-bootstrap";
import { useDispatch , useSelector} from "react-redux";
import { addToCart , deleteFromCart} from "../actions/cartActions"
import { AiOutlinePlus, AiOutlineMinus ,AiFillDelete} from "react-icons/ai";

function CartScreen() {
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const dispatch = useDispatch();
  const grandTotal = cartItems.reduce((x , item) => x + item.price , 0)
  return (
    <Container>
      <Row>
        <Col md={7}>
          <h2>My Cart</h2>
          <ListGroup as="ol" numbered>
            {cartItems.map((item) => (
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <span
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    display: "flex",
                    alignSelf: "flex-end",
                  }}
                >
                  <Image src={item.image} rounded fluid />
                </span>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">
                    {item.name} <span className="fw-light">{item.varient}</span>
                  </div>
                  <div>
                    {" "}
                    Quantity :
                    
                    <Button variant="outline-secondary" onClick={()=> {dispatch(addToCart(item ,item.varient, item.quantity-1))}}>
                      <AiOutlineMinus />
                    </Button>{" "}
                    {item.quantity}&nbsp;
                    <Button variant="outline-secondary" onClick={()=> {dispatch(addToCart(item ,item.varient, item.quantity+1))}}
                   >
                      <AiOutlinePlus />
                       </Button>{" "}
                  </div>
                  <h6> Price : {item.price}</h6>
                </div>
                <div style={{cursor:'pointer'}} onClick={()=>dispatch(deleteFromCart(item))}>
                <AiFillDelete/>
                </div>
                <Badge bg="primary" pill>
                  0
                </Badge>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={5}>
          <h3></h3>
          <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/free-icon/shopping-cart-empty-side-view_318-50806.jpg?size=626&ext=jpg&ga=GA1.2.1753554234.1690380494&semt=sph" style={{padding:".5rem 5rem"}}/>
      <Card.Body>
        <Card.Title>Payment Gateway</Card.Title>
        <Card.Text>
          Grand Total (including all taxes) : {grandTotal}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CartScreen;
