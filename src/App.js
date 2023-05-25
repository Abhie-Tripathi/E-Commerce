import React from "react";
import Store from "./pages/Store";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ItemDescription from "./components/Itemdescription";

const items = 
  {
    id: 1,
    name: 'Item 1',
    description: 'This is the description for Item 1.',
    reviews: ['Review 1', 'Review 2', 'Review 3'],
  }
  

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
    ],
  },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
