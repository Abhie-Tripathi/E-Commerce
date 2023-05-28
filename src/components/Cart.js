import { Container, Offcanvas } from "react-bootstrap"
import { useContext } from "react"
import { Context } from "./context"


const Cart = () =>{
    const ctx = useContext(Context)

        const items = ctx.cartitems.map((item)=>{
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
        <Offcanvas show={ctx.iscartopen} onHide={ctx.closecart} placement="end">
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