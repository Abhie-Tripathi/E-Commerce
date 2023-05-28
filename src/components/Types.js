import React,{useContext} from 'react'
import { Navbar,Container,Button} from "react-bootstrap"
import { Context } from './context'
import Cart from "./Cart"

const Types = (props) => {
  const ctx = useContext(Context)
  return (<>
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand style={{alignSelf:"center",
    marginLeft: "auto",
    marginRight: "auto",fontWeight:500,fontSize:"32px",
    padding:0}}>
        Store
      </Navbar.Brand>
      <Button className="btn btn-info text-white" style={{background:"#D2691E",width: 96,border: "none",
    height: 44}} onClick={ctx.cartopen}>Cart</Button>
    </Container>
  </Navbar>
  <Cart/>
  </>
  )
}

export default Types