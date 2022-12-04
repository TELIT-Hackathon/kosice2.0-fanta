import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import CustomerForm from "./screens/CustomerForm";

import RegisterComponent from "./screens/Register";
import LoginComponent from "./screens/Login";
import Home from "./screens/Home";
import HouseList from "./screens/HouseList";
import HouseDetail from "./screens/HouseDetail";
import RoommateList from "./screens/RoommateList";


import { FirebaseAuthProvider, useFirebaseAuth } from "./FirebaseAuthContext";
import { filterData } from "./helper";


const router = createBrowserRouter([
  {
    path: "",
    element: <Navigation />,
    children: [{
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
      path: "houseDetail",
      element: <HouseDetail />,
    },
    {
      path: "roommates",
      element: <RoommateList />,
    },
    {
      path: "register",
      element: <RegisterComponent />,
    },
    {
      path: "login",
      element: <LoginComponent />,
    }]

  }
]);

function App() {

  filterData();
  return (
    <div className="App">
      <FirebaseAuthProvider>

        <RouterProvider router={router} >
          <Navigation />
        </RouterProvider>
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;
