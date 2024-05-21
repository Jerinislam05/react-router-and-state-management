import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import TotalMeals from "./components/TotalMeals/TotalMeals.jsx";
import SeaFoods from "./components/SeaFoods/SeaFoods.jsx";
import SeaFood from "./components/SeaFoods/SeaFood/SeaFood.jsx";
import SeaFoodDetails from "./components/SeaFoodDetails/SeaFoodDetails.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
        element: <TotalMeals></TotalMeals>
      },
      {
        path: '/seafoods',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'),
        element: <SeaFoods></SeaFoods>
      },
      {
        path: '/seafood/:seafoodId',
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood/${params.seafood}`),
        element: <SeaFoodDetails></SeaFoodDetails>
      }
    ]
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
