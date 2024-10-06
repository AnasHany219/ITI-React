import React from "react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const AddProductPage = ({ products, setProducts }) => {
  const navigate = useNavigate();

  const handleSave = (newProduct) => {
    // Find the maximum ID currently in the products
    const maxId = products.reduce(
      (max, product) => Math.max(max, product.id),
      0
    );

    // Create a new product with an incremented ID
    const productWithNewId = { ...newProduct, id: maxId + 1 };

    setProducts((prevProducts) => [...prevProducts, productWithNewId]);
    navigate("/products");
  };

  return (
    <div>
      <h2 className="mt-5 pt-5">Add New Product</h2>
      <ProductForm onSave={handleSave} />
    </div>
  );
};

export default AddProductPage;
