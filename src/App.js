import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation";
import CustomerForm from "./screens/CustomerForm";

import RegisterComponent from "./screens/Register";
import Home from "./screens/Home";
import HouseList from "./screens/HouseList";
import HouseDetail from "./screens/HouseDetail";

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
      path: "HouseDetail",
      element: <HouseDetail />,
    },
    {
      path: "Register",
      element: <RegisterComponent />,
    }]

  }
  ,
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
