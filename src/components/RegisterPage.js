import React from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import img from "../img/login_bg.jpg";

const LoginPage = () => {
  return (
    <div
      style={{
        background: `url(${img}) no-repeat center center/cover`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "70%",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          border: "1px solid #fff",
          margin: "0 0 0 0",
          backgroundColor: "#DFD3C3",
        }}
      >
        <Form className="mt-4 mb-2">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
            />
          </Form.Group>

          <Button style={{ width: "100%" }} type="submit">
            Register
          </Button>
        </Form>
        <p className="mr-2">
          Already have an account?
          <Link to="/login" className="text-dark m-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
