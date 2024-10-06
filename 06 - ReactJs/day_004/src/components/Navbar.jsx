import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AppNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality here
    navigate("/login");
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="px-5 position-fixed w-100 top-0 z-2"
    >
      <Navbar.Brand href="/">Products</Navbar.Brand>
      <Nav className="mx-auto">
        <Nav.Link href="/products">Home</Nav.Link>
        <Nav.Link href="/add-product">Add Product</Nav.Link>
      </Nav>
      <Button variant="outline-light" onClick={handleLogout}>
        Logout
      </Button>
    </Navbar>
  );
};

export default AppNavbar;
