import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import ProductList from "./ProductList";

const inialState = {
  name: "",
  price: "",
  description: "",
  quantity: "",
  freeShipping: false,
};

function ProductForm() {
  const [product, setProduct] = useState(inialState);

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
    setProduct(inialState);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Column: Product Form */}
        <div className="col-md-4">
          <h2>Product Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Enter price"
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Enter description"
                rows={3}
                required
              />
            </Form.Group>

            <Form.Group controlId="formQuantity" className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                placeholder="Enter quantity"
                required
              />
            </Form.Group>

            <Form.Group controlId="formFreeShipping" className="mb-3">
              <Form.Check
                type="checkbox"
                name="freeShipping"
                checked={product.freeShipping}
                onChange={handleChange}
                label="Free Shipping"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add Product
            </Button>
          </Form>
        </div>

        {/* Right Column: Product List  */}
        <div className="col-md-8">
          {products.length > 0 && <ProductList products={products} />}
        </div>
      </div>
    </div>
  );
}

export default ProductForm;
