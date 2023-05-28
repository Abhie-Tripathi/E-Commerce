import {Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context";

const Products = (props) => {

  const ctx = useContext(Context)
  const productsArr = [
    {
      title: "Colors",

      price: "100$",
      
      amount: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: "50$",

      amount: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: "70$",
      
      amount: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: "100$",
      
      amount: 1,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  const items = productsArr.map((item)=>{
    return(
          <Card key={item.title}>
            <Link to={`/store/${item.title}`} style={{cursor:"pointer"}}>
            <Card.Img variant="top" src={item.imageUrl} />
            </Link>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.price}
              </Card.Text>
              <Button variant="primary" onClick={()=>ctx.setcartitems(item)} >Add To Cart</Button>
            </Card.Body>
          </Card>
    )
  })


  return (
    <div className="mt-3" style={{display:"flex",justifyContent:"space-evenly"}}>
      {[items]}
      
    </div>
  );
};

export default Products;
