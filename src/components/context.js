import React, { useState } from "react";

export const Context = React.createContext({
  cartopen: () => {},
  closecart: () =>{},
  iscartopen: "false",
  cartitems: [],
  setcartitems: () => {},
  settoken: () => {},
  isloggedin: false,
});

const ContextProvider = (props) => {
  const [cartitems, setcartitems] = useState([]);
  const [iscartopen, setiscartopen] = useState(false);
  const [token, settoken] = useState(false);

  const cartopenhandler = () => {
    setiscartopen(true);
  };
  const cartclosehandler = () =>{
    setiscartopen(false)
  }

  const tokenhandler = (token) => {
    settoken(token);
  };

  const cartitemshandler = (selecteditem) => {
    const existingitemindex = cartitems.findIndex(
      (item) => item.title === selecteditem.title
    );
    const existingcartitem = cartitems[existingitemindex];
    let updatedItems;
    if (existingcartitem) {
      const updatedItem = {
        ...existingcartitem,
        amount: existingcartitem.amount + 1,
      };
      updatedItems = [...cartitems];
      updatedItems[existingitemindex] = updatedItem;
    } else {
      updatedItems = cartitems.concat(selecteditem);
    }
    setcartitems(updatedItems);
  };
  return (
    <Context.Provider
      value={{
        cartopen: cartopenhandler,
        closecart: cartclosehandler,
        iscartopen: iscartopen,
        setcartitems: cartitemshandler,
        cartitems: cartitems,
        settoken: tokenhandler,
        isloggedin: !!token,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
