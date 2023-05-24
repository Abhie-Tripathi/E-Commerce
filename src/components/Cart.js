import { Container, Offcanvas } from "react-bootstrap"
import { useContext } from "react"
import CartContext from "./context"


const Cart = (props) =>{
    const ctx = useContext(CartContext)
    


        const items = ctx.items.map((item)=>{
            return(
                <div key={item.title} className="card flex-row flex-wrap mb-3 we">
                <div className="card-header border-0" style={{padding: 0}}>
                    <img style={{width: 105,height: 89,margin: 11}} src={item.imageUrl} alt="" />
                </div>
                <div className="card-block px-2">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{`Price : ${item.price} Amount : ${item.amount}`}
                    <a href="#" style={{marginLeft:18,marginBottom:6}} className="btn btn-sm btn-danger">Remove</a>
                    
                    </p>
                    
                </div>
            </div>
            )
        })



    return(<Container>
        <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h3>Cart</h3></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {[items]}
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    )
}





export default Cart