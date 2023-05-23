import { Container, Offcanvas } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "./context"


const Cart = (props) =>{
    const ctx = useContext(CartContext)
    console.log(ctx.items)


        const items = ctx.items.map((item)=>{
            return(
                <div class="card flex-row flex-wrap mb-3 we">
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



    return(<Container>
        <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {[items]}
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    )
}





export default Cart