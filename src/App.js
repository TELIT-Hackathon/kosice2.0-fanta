import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import CustomerForm from "./screens/CustomerForm";

import Home from "./screens/Home";
import HouseList from "./screens/HouseList";
import HouseDetail from "./screens/HouseDetail";
import Landing from "./screens/Landing";
import RoommateList from "./screens/RoommateList";

import { Firestore } from "./firebase";

import mockupData from "./mockup_data.json";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/home",
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
    path: "Roommates",
    element: <RoommateList />,
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
