import React, { useState, useEffect, useContext} from 'react';
import { Container, Offcanvas } from 'react-bootstrap';
import { Context } from './context';

const Cart = () => {
  const ctx = useContext(Context);
  const [items, setItems] = useState([]);

 async function fetchData() {
    try {
      console.log("Get Request from cart in useEffect")
      const response = await fetch(
        `https://crudcrud.com/api/86b368901cc0484189a6afc2e912bbd5/${ctx.modifiedemail}`
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  }

  useEffect(() => {
    if (ctx.iscartopen) {
      fetchData();
    }
  });

  return (
    <Container>
      <Offcanvas show={ctx.iscartopen} onHide={ctx.closecart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Cart</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {items.map((item) => (
            <div key={item.title} className="card flex-row flex-wrap mb-3 we">
              <div className="card-header border-0" style={{ padding: 0 }}>
                <img
                  style={{ width: 105, height: 89, margin: 11 }}
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="card-block px-2">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  {`Price: ${item.price} Amount: ${item.amount}`}
                  <button
                    
                    style={{ marginLeft: 18, marginBottom: 6 }}
                    className="btn btn-sm btn-danger"
                  >
                    Remove
                  </button>
                </p>
              </div>
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Cart;
