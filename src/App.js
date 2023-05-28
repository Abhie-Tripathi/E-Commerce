import React from "react";
import Store from "./pages/Store";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ItemDescription from "./components/Itemdescription";
import LoginPage from "./components/LoginPage";
import ContextProvider from "./components/context";


  

const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/contactus", element: <ContactUs /> },
      { path: "/store/:id",element:<ItemDescription/>}
    ]
  },{
    path:"/login",
    element:<LoginPage/>
  }
]);

function App() {
  return <ContextProvider>
  <RouterProvider router={Router} />
  </ContextProvider>
}

export default App;
