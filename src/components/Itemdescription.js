import React,{useContext} from "react";
import { Container, Row, Col, Card, Button,ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Types from "./Types";
import Cart from "./Cart";
import { Context } from "./context";


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
const customerReviews = [
  {
    name: "John Doe",
    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sem rhoncus, vestibulum ipsum nec, viverra libero.",
    imageUrl: "https://picsum.photos/64",
  },
  {
    name: "Hamm",
    review: "Vestibulum faucibus est vel ante tincidunt consectetur. Sed tempus urna at sem lacinia, ut iaculis sapien interdum.",
    imageUrl: "https://picsum.photos/65",
  },
  {
    name: "Dawodh",
    review: "Vestibulum faucibus est vel ante tincidunt consectetur. Sed tempus urna at sem lacinia, ut iaculis sapien interdum.",
    imageUrl: "https://picsum.photos/66",
  },
  {
    name: "CJ",
    review: "Vestibulum faucibus est vel ante tincidunt consectetur. Sed tempus urna at sem lacinia, ut iaculis sapien interdum.",
    imageUrl: "https://picsum.photos/67",
  },
  // Add more reviews
];

const ItemDescription = () => {
  const ctx = useContext(Context)
  const { id } = useParams();
  const selecteditem = productsArr.find((item) => item.title === id);

  return (
    <Container fluid>
      <Cart />
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
                onClick={()=>ctx.setcartitems(selecteditem)}
                variant="primary"
                style={{ borderRadius: "13px", padding: "19px", fontSize: "24px", fontWeight: 550 }}
              >
                Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Col>
      </Row >
      <Row className="mt-5" >
        <Col>
          <h2 className="text-center" style={{ color: "white", fontSize: "32px", fontWeight: 500 }}>
            Customer Reviews
          </h2>
          <ListGroup className="mx-auto mt-4" style={{ maxWidth: "900px"}}>
            {customerReviews.map((review, index) => (
              <ListGroup.Item key={index}  style={{background:"antiquewhite"}}  className="d-flex align-items-center">
                <img
                  src={review.imageUrl}
                  alt="Customer"
                  className="mr-3 rounded-circle"
                  style={{ width: "64px", height: "64px" }}
                />
                <div>
                  <h5>{review.name}</h5>
                  <p>{review.review}</p>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDescription;
