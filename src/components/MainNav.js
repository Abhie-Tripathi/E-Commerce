import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context";
import "./MainNav.css";

const MainNav = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = () => {
    localStorage.removeItem("Token");
    ctx.settoken(null);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="mb-0 h1 fs-2">The Generics</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mt-1">
            <LinkContainer to="/">
              <Nav.Link className="nav-link">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/store">
              <Nav.Link className="nav-link">Store</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="nav-link">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactus">
              <Nav.Link className="nav-link">Contact Us</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav>
            {!ctx.isloggedin && (
              <Button
                variant="primary"
                className="me-3"
                onClick={loginHandler}
              >
                Log in
              </Button>
            )}
            {ctx.isloggedin && (
              <Button variant="warning" onClick={logoutHandler}>
                Log out
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
