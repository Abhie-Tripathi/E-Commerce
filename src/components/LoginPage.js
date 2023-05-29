import React,{useRef,useContext} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom"
import { Context } from "./context";



const LoginPage = () => {
  const ctx = useContext(Context)
  const navigate = useNavigate()
  const emailinputref = useRef()
  const passwordinputref = useRef()
  
  const loginHandler = (event) =>{
    event.preventDefault()
    const enteredemail = emailinputref.current.value
    const enteredpassword = passwordinputref.current.value
    ctx.enteredemail(enteredemail)

    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7344iRGQ2vtTko_2awbK36aPE_nCUw2c",{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        email:enteredemail,
        password:enteredpassword,
        returnSecureToken:true
      })

    }).then((response) => {
      if (response.ok) {
        return response.json()
        //If the post is successfull
      } else {
        //If the post is unsuccessfull
        return response.json().then((data) => {
          let errorMessage = "Authentication Failed";
          if (data && data.error && data.error.message) errorMessage = data.error.message;
          
        throw new Error(errorMessage);
        });
      }
    })
    .then((data)=>{
      ctx.settoken(data.idToken)
      localStorage.setItem("Token",data.idToken)
      navigate("/store")
  


    })
    .catch((err)=>{
      alert(err.message)
    })
  }
  return (
    <Container className="vh-100">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <h2 className="text-center text-white">Login</h2>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label className="text-white">E-mail</Form.Label>
              <Form.Control type="text" ref={emailinputref} placeholder="Enter your username" />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label className="text-white">Password</Form.Label>
              <Form.Control type="password" ref={passwordinputref} placeholder="Enter your password" />
            </Form.Group>
            <div className="text-center mt-4">
              <Button onClick={loginHandler}
                variant="primary"
                type="submit"
                style={{ width: "152px", fontSize: "23px" }}
              >
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
