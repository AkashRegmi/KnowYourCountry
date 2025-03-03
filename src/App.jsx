import React from 'react'
import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Applayout from './assets/components/Applayout';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Country from './assets/pages/Country';
import Contact from './assets/pages/Contact';
import Error from './assets/pages/Error';



const App = () => {
  const router= createBrowserRouter([
    {
      path:"/",
      element: <Applayout/>,
      errorElement:<Error/>,
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/country",
          element:<Country/>
        },
        {
          path: "/contact",
          element:<Contact/>
        },
        // {
        //   path: "/*",
        //   element:<Error/>
        // },
        
      
      ]
    }
  ])

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
