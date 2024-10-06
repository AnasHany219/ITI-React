import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ProductPage = ({ products, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product)
    return <h1 className="text-center my-5 fw-bold">Product not found</h1>;

  const handleEdit = () => {
    navigate(`/products/${id}/edit`); // Navigate to edit page
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      onDelete(id); // Call the onDelete function passed down from parent
      navigate("/products"); // Redirect to products list after deletion
    }
  };

  return (
    <Container className="my-5 mt-5 pt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="mb-3">{product.name}</h2>
          <img
            src={product.imageURL}
            alt={product.name}
            className="img-fluid mb-3 rounded-3"
          />
          <p>
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <strong>Quantity:</strong> {product.quantity}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Category:</strong> {product.category}
          </p>
          <div className="mt-4">
            <Button
              variant="primary"
              className="mr-2 px-5"
              onClick={handleEdit}
            >
              Edit Product
            </Button>
            <Button
              variant="danger"
              className="mx-4 px-5"
              onClick={handleDelete}
            >
              Delete Product
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
