import { Offcanvas } from "react-bootstrap"


const Cart = (props) =>{
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        }
        
        ]


        const items = cartElements.map((item)=>{
            return(
                <div class="card flex-row flex-wrap mb-3">
                <div class="card-header border-0">
                    <img src={item.imageUrl} alt="" />
                </div>
                <div class="card-block px-2">
                    <h4 class="card-title">{item.title}</h4>
                    <p class="card-text">{`Price : ${item.price} Amount : ${item.quantity}`}
                    <a href="#" style={{marginleft:103}} class="btn btn-sm btn-danger">Remove</a>
                    
                    </p>
                    
                </div>
            </div>
            )
        })



    return(
        <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {[items]}
        </Offcanvas.Body>
      </Offcanvas>
    )
}





export default Cart