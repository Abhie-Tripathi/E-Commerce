import React, { useState} from "react";

export const Context = React.createContext({
  cartopen: () => {},
  closecart: () =>{},
  iscartopen: "false",
  cartitems: [],
  setcartitems: () => {},
  settoken: () => {},
  isloggedin: "false",
  modifiedemail : "",
  enteredemail : ""
});


const ContextProvider = (props) => {
  const initialtoken = localStorage.getItem("Token")
  const [cartitems, setcartitems] = useState([]);
  const [iscartopen, setiscartopen] = useState(false);
  const [token, settoken] = useState(initialtoken);
  const [enteredemail,setenteredemail] =  useState("")
  
  
  
  const cartopenhandler = () => {
    setiscartopen(true);
  };
  const cartclosehandler = () =>{
    setiscartopen(false)
  }

  const tokenhandler = (token) => {
    settoken(token);
  };

  const emailhandler = (email) =>{
    setenteredemail(email.replace(/[^a-zA-Z0-9 ]/g, ''))
  }

  const cartitemshandler = (selecteditem) => {
    console.log("caritemshandler")
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
      fetch(`https://crudcrud.com/api/d3743053bc964437b46d30e58dd54a2e/${enteredemail}`,{
        method: "POST",
        body: JSON.stringify(updatedItem),
        headers: {"Content-Type": "application/json"}
      })
    } else {
      updatedItems = cartitems.concat(selecteditem);
      fetch(`https://crudcrud.com/api/d3743053bc964437b46d30e58dd54a2e/${enteredemail}`,{
        method: "POST",
        body: JSON.stringify(selecteditem),
        headers: {"Content-Type": "application/json"}
      })
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
        modifiedemail: enteredemail,
        enteredemail: emailhandler
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
