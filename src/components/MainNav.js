import { Navbar,Container,Button,Nav} from "react-bootstrap";




const MainNav = () =>{
    return(
        <Navbar bg="primary" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="mb-0 h1 fs-2">The Generics</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto fs-5 ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      <Button className="btn btn-warning">Cart</Button>
      </Container>
    </Navbar>
    )
}



export default MainNav
