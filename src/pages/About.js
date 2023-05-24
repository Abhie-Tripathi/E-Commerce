import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={6} className="text-center">
          <Image
            src="https://source.unsplash.com/random/200x200/?logo"
            className="mb-4"
            roundedCircle
          />
          <h2 style={{ color: 'white' }}>About Us</h2>
          <p style={{ color: 'white' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eget mi neque. In hac habitasse platea dictumst. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Phasellus tempor efficitur urna a efficitur. Mauris
            dignissim eros id felis eleifend semper.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/random/300x300/?person"
            />
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>John Doe</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget mi neque.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://source.unsplash.com/random/300x300/?people"
            />
            <Card.Body>
              <Card.Title style={{ color: 'black' }}>Jane Smith</Card.Title>
              <Card.Text style={{ color: 'black' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eget mi neque.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
