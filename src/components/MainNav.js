import { Navbar,Container,Nav} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'




const MainNav = (props) =>{
    return(
        <Navbar style={{background:"black"}} variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="mb-0 h1 fs-2">The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-1 ">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store">
            <Nav.Link>Store</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}



export default MainNav
