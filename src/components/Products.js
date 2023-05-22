import { Row, Col, Card, Button } from "react-bootstrap";

const Products = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: "100$",

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: "50$",

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: "70$",

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: "100$",

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];


  const items = productsArr.map((item)=>{
    return(
        <Col>
          <Card
            style={{
              width: "18rem",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.price}
              </Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
    )
  })


  return (
    <>
      <h4 className="text-center mt-2 mb-4 text-white">Musics</h4>
      <Row className="text-center mt-4">
        {[items]}
      </Row>
      <h4 className="text-center my-4 text-white">Merchandises</h4>
      <Row className="text-center mt-4">
        {[items]}
      </Row>
    </>
  );
};

export default Products;
