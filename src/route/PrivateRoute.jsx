import React from "react";
import './../App.css'
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

function PrivateRoute({authenticate}) {
  
  return (
    authenticate === true ? <ProductDetail /> : <Navigate to="/login" />
  )
}

export default PrivateRoute;
