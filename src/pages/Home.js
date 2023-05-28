import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';


const Home = () => {
  return (
    <div className="bg-dark text-white">
      <Container className="py-5">
        <div className="text-center text-white">
          <h1 className="display-4">The Generics</h1>
          <p className="lead">Your Source for Beautiful Wallpapers</p>
          <Button variant="primary" size="lg">
            Explore Our Collection
          </Button>
        </div>
        <Row className="mt-5">
          <Col>
            <h2 className="text-white">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              eget mi neque. In hac habitasse platea dictumst. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              Curae; Phasellus tempor efficitur urna a efficitur. Mauris
              dignissim eros id felis eleifend semper.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2 className="text-white">Our Products</h2>
            <p>
              We offer a wide range of high-quality wallpapers to enhance the
              aesthetics of your space. Whether you're looking for modern
              patterns, nature-inspired designs, or timeless classics, we have
              the perfect wallpaper to transform your walls into works of art.
            </p>
            <Row className="justify-content-center mt-4">
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"

                    alt="Wallpaper 1"
                  />
                  <Card.Body>
                    <Card.Title>Modern Collection</Card.Title>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
                    alt="Wallpaper 2"
                  />
                  <Card.Body>
                    <Card.Title>Nature-Inspired Collection</Card.Title>
                    <Button variant="primary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <h2 className="text-white">Contact Us</h2>
            <p>
              Have a question or want to inquire about our products? Don't hesitate
              to get in touch. Reach out to us via email or phone, and our friendly
              team will be happy to assist you.
            </p>
          </Col>
        </Row>
      </Container>
      <footer className="bg-black text-center py-3">
        <p className="mb-0 text-white">© 2023 The Generics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
