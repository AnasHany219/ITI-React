import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const EditProductPage = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  const handleSave = (updatedProduct) => {
    const updatedProducts = products.map((p) =>
      p.id === parseInt(id) ? { ...p, ...updatedProduct } : p
    );
    setProducts(updatedProducts);
    navigate("/products");
  };

  return (
    <div>
      <h2 className="mt-5 pt-5">Edit Product</h2>
      <ProductForm product={product} onSave={handleSave} />
    </div>
  );
};

export default EditProductPage;
