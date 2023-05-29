import React from "react";
import Store from "./pages/Store";
import About from "./pages/About";
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom";
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

  return <>
    <Router>
    <MainNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {ctx.isloggedin &&
      <Route path="/store" element={<Store/>}/>}
      {!ctx.isloggedin &&
      <Route path="/store" element={<Navigate to="/login"/>}/>}
      
      <Route path="/about" element={<About/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      {ctx.isloggedin && <Route path="/store/:id" element={<ItemDescription/>}/>}
      {!ctx.isloggedin && <Route path="/store/:id" element={<Navigate to="/login"/>}/>}
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    </Router>
    </>
}

export default App;
