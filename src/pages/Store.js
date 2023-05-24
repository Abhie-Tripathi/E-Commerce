import React,{useState} from 'react'
import CartContext from '../components/context'
import Cart from '../components/Cart'
import MainNav from '../components/MainNav'
import Products from '../components/Products'
import Types from '../components/Types'

const Store = () => {
    const [showcart,setshowcart] = useState(false)
  const [cartitems,setcartitems] = useState([])

  const onshow = () =>{
    setshowcart(true)
  }
  const onhide = () =>{
    setshowcart(false)
  }

  const onAddtocart = (selecteditem)=>{
    const existingitemindex = cartitems.findIndex((item)=> item.title===selecteditem.title)
    const existingcartitem = cartitems[existingitemindex]
    let updatedItems
    if(existingcartitem){
      const updatedItem = {...existingcartitem,amount: existingcartitem.amount + 1}
      updatedItems = [...cartitems]
      updatedItems[existingitemindex] = updatedItem
    }
    else{
      updatedItems = cartitems.concat(selecteditem)
    }
    setcartitems(updatedItems)
    console.log(updatedItems)
    
  }
  return (<>
    <Types onclick={onshow}/>
    <CartContext.Provider value={{items:cartitems}}>
    <Cart handleClose={onhide} show={showcart}/>
      <Products onAddtocart={onAddtocart}/>
    </CartContext.Provider>
    </>
  )
}

export default Store