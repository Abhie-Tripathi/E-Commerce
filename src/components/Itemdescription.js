import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import { useParams } from "react-router-dom";
import Types from "./Types";

const productsArr = [
  {
    title: "Colors",

    price: "100$",

    amount: 1,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

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

const ItemDescription = ({ item }) => {
  const { id } = useParams();
  const selecteditem = productsArr.find((item) => item.title === id);

  return (<><Types/>
    <Container className="mt-5">
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
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
            <Card.Text
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "32px",
                color: "white",
                fontWeight: 500,
              }}
            >
              {selecteditem.title}
            </Card.Text>
            <p style={{ color: "white",display: "flex",
                justifyContent: "center" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
              enim id libero lacinia congue ac nec turpis. Integer eu arcu ut ex
              ultricies euismod. Sed id bibendum tortor. Etiam eget justo ut
              augue tincidunt aliquet. Maecenas id nisi a felis fringilla
              varius. Nulla id tristique ligula, vitae luctus lacus. Morbi
              aliquet diam sed nisl accumsan, id condimentum velit malesuada.
              Nulla facilisi.
            </p>
            <p style={{
                fontSize: "29px",
                color: "white",
                fontWeight: 500,
              }}>{`Price : ${selecteditem.price}`}</p>
          </Card.Body>
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default ItemDescription;
