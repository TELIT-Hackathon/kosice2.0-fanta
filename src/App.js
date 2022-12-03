import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import CustomerForm from "./screens/CustomerForm";

import Home from "./screens/Home";
import HouseList from "./screens/HouseList";

import { Firestore } from "./firebase";
import mockupData from "./mockup_data.json";
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
    element: <HouseList data={mockupData.data} />,
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
