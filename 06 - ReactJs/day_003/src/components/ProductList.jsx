import { Alert, Button } from "react-bootstrap";

function ProductList({ products }) {
  return (
    <div className="mt-4">
      <h4>Product List</h4>
      <div className="product-list-container">
        {products.map((prod, index) => (
          <div key={index} className="product-item">
            <Alert variant="light">
              <p>
                <strong>Name:</strong> {prod.name}
              </p>
              <p>
                <strong>Price:</strong> ${prod.price}
              </p>
              <p>
                <strong>Description:</strong> {prod.description}
              </p>
              <p>
                <strong>Quantity:</strong>{" "}
                {prod.quantity === "0"
                  ? "No product available"
                  : prod.quantity === "1"
                  ? "Only one product available"
                  : `${prod.quantity} products available`}
              </p>
              <p>
                <strong>Free Shipping:</strong>{" "}
                {prod.freeShipping ? "Yes" : "No"}
              </p>
              {prod.quantity === "0" ? (
                <Button variant="danger" disabled>
                  Sold Out
                </Button>
              ) : (
                <Button variant="warning">Buy Now</Button>
              )}
            </Alert>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
