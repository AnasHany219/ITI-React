import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) return;

    // Implement authentication logic here
    navigate("/products");
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-5 pt-5">
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" className="mt-3 px-5">
        Login
      </Button>
    </Form>
  );
};

export default LoginPage;
