import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center p-5">
      <h1 className="display-4">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Button as={Link} to="/" variant="primary">
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFound;
