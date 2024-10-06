import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";

import productsData from "./data/productsData";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== parseInt(id)
    );
    setProducts(updatedProducts);
  };

  return (
    <Router>
      <Navbar />
      <Container className="mt-5">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/products"
            element={
              <ProductList products={products} onDelete={handleDelete} />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductPage products={products} onDelete={handleDelete} />
            }
          />
          <Route
            path="/products/:id/edit"
            element={
              <EditProductPage products={products} setProducts={setProducts} />
            }
          />
          <Route
            path="/add-product"
            element={
              <AddProductPage products={products} setProducts={setProducts} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
