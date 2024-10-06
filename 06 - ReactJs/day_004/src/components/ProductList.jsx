import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const ProductList = ({ products, onDelete }) => {
  return (
    <div>
      <h2 className="mt-5 pt-5">Products</h2>
      <Table responsive="sm" hover className="text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td className="d-flex justify-content-evenly">
                <Link to={`/products/${product.id}`}>
                  <FaEye className="mr-2" />
                </Link>
                <Link to={`/products/${product.id}/edit`}>
                  <FaEdit className="mr-2" />
                </Link>
                <FaTrash
                  className="mt-2"
                  onClick={() => onDelete(product.id)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className="mb-3" as={Link} to="/add-product">
        Add New Product
      </Button>
    </div>
  );
};

export default ProductList;
