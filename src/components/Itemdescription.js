import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Types from "./Types";
import Cart from "./Cart";

const productsArr = [
  {
    title: "Colors",
    price: "100$",
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and White Colors",
    price: "50$",
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: "70$",
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: "100$",
    amount: 1,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ItemDescription = () => {
  const { id } = useParams();
  const selecteditem = productsArr.find((item) => item.title === id);

  return (
    <Container fluid>
      <Cart/>
      <Row>
      <Col xs={10} className="mx-auto">
          <Types />
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center mt-5">
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img
            src={selecteditem.imageUrl}
            alt="Product"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title className="text-center" style={{ fontSize: "32px", color: "white", fontWeight: 500 }}>
              {selecteditem.title}
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut enim id libero lacinia congue ac nec turpis. Integer eu arcu
              ut ex ultricies euismod. Sed id bibendum tortor. Etiam eget justo ut augue tincidunt aliquet. Maecenas id nisi a felis
              fringilla varius. Nulla id tristique ligula, vitae luctus lacus. Morbi aliquet diam sed nisl accumsan, id condimentum velit
              malesuada. Nulla facilisi.
            </Card.Text>
            <Card.Text style={{ fontSize: "29px", color: "white", fontWeight: 500 }}>
              Price: {selecteditem.price}
            </Card.Text>
            <div className="d-flex justify-content-center">
              <Button
                variant="dark"
                style={{ borderRadius: "13px", padding: "19px", fontSize: "24px", fontWeight: 550, marginRight: "12px" }}
              >
                Buy Now
              </Button>
              <Button
                variant="primary"
                style={{ borderRadius: "13px", padding: "19px", fontSize: "24px", fontWeight: 550 }}
              >
                Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDescription;
