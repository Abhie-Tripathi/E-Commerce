import React,{useContext} from "react";
import Cart from "../components/Cart";
import Products from "../components/Products";
import Types from "../components/Types";



const Store = () => {
  return (
    <>
      <Types />
      <Cart />
      <Products/>
    </>
  );
};

export default Store;
