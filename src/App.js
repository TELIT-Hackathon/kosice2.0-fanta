import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


import Navigation from "./components/Navigation";
import Home from './screens/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
