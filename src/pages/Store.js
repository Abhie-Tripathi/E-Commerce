import React from "react";
import Types from "../components/Types";
import Cart from "../components/Cart";
import Products from "../components/Products";
import { Container, Row, Col } from "react-bootstrap";

const Store = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Row>
        <Col xs={10} className="mx-auto">
          <Types />
          <Products />
          <Cart/>
        </Col>
      </Row>
    </Container>
  );
};

export default Store;
