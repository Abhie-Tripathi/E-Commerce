import React,{useState} from "react";
import MainNav from "./components/MainNav";
import Products from "./components/Products";
import Cart from "./components/Cart"
import CartContext from "./components/context";


function App() {
  const [showcart,setshowcart] = useState(false)
  const [cartitems,setcartitems] = useState([])

  const onshow = () =>{
    setshowcart(true)
  }
  const onhide = () =>{
    setshowcart(false)
  }

  const onAddtocart = (item)=>{
    setcartitems((previtems)=> [...previtems,item])
  }
  return (
    <CartContext.Provider value={{items:cartitems}}>
    <Cart handleClose={onhide} show={showcart}/>
      <MainNav onclick={onshow}/>
      <Products onAddtocart={onAddtocart}/>
    </CartContext.Provider>
  );
}

export default App;
