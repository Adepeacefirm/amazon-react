import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center"
    }}>
      <div style={{
        display: "flex",
        gap: "2em"
      }}>
        <Link to={"/"}> Home </Link>
        <Link to={"/about"}> About Us </Link>
        <Link to={"/contact"}> Contact </Link>
        <Link to={"/products"}> Products</Link>
        <Link to={"/addpost"}> Add Post</Link>
        <Link to={"/add-product"}> Add Product</Link>
        <Link to={"/dashboard"}> Dashboard</Link>
      </div>
      <div style={{
        display: "flex",
        gap: "2em"
      }}>
        <Link to={"/signup"}> Sign Up</Link>
        <Link to={"/login"}> Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
