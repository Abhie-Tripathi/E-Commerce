import React from "react";
import Store from "./pages/Store";
import About from "./pages/About";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";

const Router = createBrowserRouter([
  {path:"/",element:<RootLayout/>,
  children:[{path:"/",element:<Home/>},
  {path:"/store",element:<Store/>},{path:"/about",element:<About/>}]}
  
])


function App() {
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
