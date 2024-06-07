import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Components/Login/Login';
import Layout from './Components/Layout/Layout';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import Notfound from './Components/Notfound/Notfound';

const myroots = createBrowserRouter([
  {path:""  , element : <Layout/>  ,children :[
    {path:"/" , element: <Products/>},
    {path:"/login" , element: <Login/>},
    {path:"/register" , element: <Register/>},
    {path:"/products" , element: <Products/>},
    {path:"/*",element:<Notfound/>}

  ]}
])

export default function App() {
  return (
    <>
   <RouterProvider  router={myroots}/>
    </>
  )
}
