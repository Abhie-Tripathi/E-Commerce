import React,{useState} from "react";
import MainNav from "./components/MainNav";
import Products from "./components/Products";
import Cart from "./components/Cart"


function App() {
  const [showcart,setshowcart] = useState(false)

  const onshow = () =>{
    setshowcart(true)
  }
  const onhide = () =>{
    setshowcart(false)
  }
  return (
    <>
    <Cart handleClose={onhide} show={showcart}/>
      <MainNav onclick={onshow}/>
      <Products />
    </>
  );
}

export default App;
