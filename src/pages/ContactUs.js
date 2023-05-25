import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const uploadtofirebase = async () => {
    await fetch(
      "https://react-http-b7880-default-rtdb.firebaseio.com/Userdata.json",
      {
        method: "POST",
        body: JSON.stringify({ Name: name, Email: email, Phone: phone }),
        headers: { "Content-Type": "application/json" },
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadtofirebase();

    setName("");
    setEmail("");
    setPhone("");
  };

  const inputStyle = {
    marginBottom: "1rem",
    padding: "0.5rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const buttonStyle = {
    marginTop: "1rem",
    padding: "0.75rem 1.5rem",
    borderRadius: "4px",
    fontSize: "1rem",
    fontWeight: "bold",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div className="bg-dark text-white">
      <Container className="py-5">
        <h1>Contact Us</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={inputStyle}
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={buttonStyle}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
