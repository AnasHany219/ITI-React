import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ProductForm = ({ product = {}, onSave }) => {
  // Initial values for form fields
  const initialValues = {
    name: product.name || "",
    price: product.price || "",
    quantity: product.quantity || "",
    description: product.description || "",
    category: product.category || "",
    imageURL: product.imageURL || "",
  };

  // State hooks for each form field
  const [name, setName] = useState(initialValues.name);
  const [price, setPrice] = useState(initialValues.price);
  const [quantity, setQuantity] = useState(initialValues.quantity);
  const [description, setDescription] = useState(initialValues.description);
  const [category, setCategory] = useState(initialValues.category);
  const [imageURL, setImageURL] = useState(initialValues.imageURL);

  // Submit handler to pass the form data to the parent component
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, price, quantity, description, category, imageURL });
  };

  // Reset handler to reset form fields to initial values
  const handleReset = () => {
    setName(initialValues.name);
    setPrice(initialValues.price);
    setQuantity(initialValues.quantity);
    setDescription(initialValues.description);
    setCategory(initialValues.category);
    setImageURL(initialValues.imageURL);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </Form.Group>
      <Button
        type="button"
        className="mt-3 px-3"
        variant="secondary"
        onClick={handleReset}
      >
        Reset
      </Button>
      <Button type="submit" className="mt-3 mx-3 px-5" variant="primary">
        Save
      </Button>
    </Form>
  );
};

export default ProductForm;
