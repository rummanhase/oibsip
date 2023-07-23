import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"
import {LinkContainer} from "react-router-bootstrap"
import {Image } from 'react-bootstrap'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " data-bs-theme="dark" style={{ color: 'whitesmoke' }}>
         <Container>
         <Navbar.Brand className='offer'>
            <Image src="https://th.bing.com/th/id/OIP.Y2E8m9FNAX_3v4JsCYKaFgHaHa?pid=ImgDet&w=506&h=506&rs=1" alt='logo' style={{height :"50px" }}/>
        </Navbar.Brand>
         
         </Container>
      <Container>
       
        <Navbar.Brand>The Pizza Store</Navbar.Brand>
        </Container>
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
                <Nav.Link >Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
                <Nav.Link >About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link >Contact</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="justify-content-end">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default BasicExample;