import React, { useContext } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';
import { Context } from './context';

const Types = () => {
  const ctx = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark" className="justify-content-between">
      <Navbar.Brand style={{ fontWeight: 500, fontSize: "32px", padding: 0 }}>
        Store
      </Navbar.Brand>
      <Button
        variant="info"
        className="text-white"
        style={{ background: "#D2691E", width: "96px", border: "none", height: "44px" }}
        onClick={ctx.cartopen}
      >
        Cart
      </Button>
    </Navbar>
  );
};

export default Types;
