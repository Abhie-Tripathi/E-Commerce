import React from "react";
import Store from "./pages/Store";
import About from "./pages/About";
import {Route,Routes,Navigate} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ItemDescription from "./components/Itemdescription";
import LoginPage from "./components/LoginPage";
import ContextProvider from "./components/context";
import { Context } from "./components/context";
import { useContext } from "react";
import MainNav from "./components/MainNav";


function App() {
  const ctx = useContext(Context)

  return <ContextProvider>

    <MainNav/>
    {console.log(ctx.token)}
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/store" element={!!ctx.token ? <Store/> : <Navigate replace to={"/login"} />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/store/:id" element={<ItemDescription/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  </ContextProvider>
}

export default App;
