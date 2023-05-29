import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./MainNav.css";
import { useNavigate } from "react-router-dom";
import { Context } from "./context";
import { useContext } from "react";

const MainNav = () => {
  const ctx = useContext(Context)
  const navigate = useNavigate()

  const loginhandler = () =>{
    navigate("/login")
  }
  const logouthandler = ()=>{
    localStorage.removeItem("Token")
    ctx.settoken(null)
  }
  return (
    <Navbar style={{ background: "black" }} variant="dark" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="mb-0 h1 fs-2">
          The Generics
        </Navbar.Brand>
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
            <LinkContainer to="/contactus">
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            {!ctx.isloggedin && <button
              onClick={loginhandler}
              className="btn btn-primary"
              style={{
                position: "absolute",
                top: "18px",
                right: "110px",
                padding: "9px",
                width: "108px",
                fontSize: "17px",
                fontWeight: 500,
                borderRadius: "6px",
              }}
            >
              Log in
            </button>}
            {ctx.isloggedin && <button
              onClick={logouthandler}
              className="btn btn-warning"
              style={{
                position: "absolute",
                top: "18px",
                right: "110px",
                padding: "9px",
                width: "108px",
                fontSize: "17px",
                fontWeight: 500,
                borderRadius: "6px",
              }}
            >
              Log out
            </button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
