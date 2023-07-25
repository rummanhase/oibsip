import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiSolidOffer} from 'react-icons/bi' 
import {LinkContainer} from "react-router-bootstrap"
import { useDispatch , useSelector} from "react-redux";

function NavbarSec() {
  const dispatch = useDispatch();

  const cartState = useSelector(state => state.cartReducer)
  return (
    <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
      <h6 className='text-warning offer'>
        <BiSolidOffer/>&nbsp;
        100% free delivery 
        </h6>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <LinkContainer to="/login">
            <Nav.Link >Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
            <Nav.Link >Cart &nbsp;
              {cartState.cartItems.length}
            </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavbarSec;