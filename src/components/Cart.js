import { useState, useEffect, useContext } from "react";
import { Container, Offcanvas } from "react-bootstrap";
import { Context } from "./context";

const Cart = () => {
  const ctx = useContext(Context);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://crudcrud.com/api/d3743053bc964437b46d30e58dd54a2e/${ctx.modifiedemail}`
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    if (ctx.cartitems.length === 0) {
      fetchData();
    } else {
      setItems(ctx.cartitems);
    }
  }, [ctx.cartitems, ctx.modifiedemail]);

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
            <div
              key={item.title}
              className="card flex-row flex-wrap mb-3 we"
            >
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
                  {`Price : ${item.price} Amount : ${item.amount}`}
                  <a
                    href="#"
                    style={{ marginLeft: 18, marginBottom: 6 }}
                    className="btn btn-sm btn-danger"
                  >
                    Remove
                  </a>
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
