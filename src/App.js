import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import CustomerForm from "./screens/CustomerForm";

import Home from "./screens/Home";
import HouseList from "./screens/HouseList";
import HouseDetail from "./screens/HouseDetail";

import { Firestore } from "./firebase";

import mockupData from "./mockup_data.json";
import RegisterComponent from "./screens/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "customer-form",
    element: <CustomerForm />,
  },
  {
    path: "results",
    element: <HouseList />,
  },
  {
    path: "HouseDetail",
    element: <HouseDetail />,
  },
  {
    path: "Register",
    element: <RegisterComponent />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navigation />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
