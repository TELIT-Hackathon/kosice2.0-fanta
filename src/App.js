import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import CustomerForm from "./screens/CustomerForm";

import RegisterComponent from "./screens/Register";
import Home from "./screens/Home";
import HouseList from "./screens/HouseList";
import HouseDetail from "./screens/HouseDetail";
import Landing from "./screens/Landing";

import { FirebaseAuthProvider, useFirebaseAuth } from "./FirebaseAuthContext";


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
    path: "Register",
    element: <RegisterComponent />,
  },
]);

function App() {



  return (
    <div className="App">
      <FirebaseAuthProvider>
        <Navigation />
        <RouterProvider router={router} />
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;
