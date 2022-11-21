import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import img from "../img/login_bg.jpg";
import { useNavigate, Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const LoginPage = () => {
  const { accounts, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();


  const onSubmit = (e)  =>{
    e.preventDefault();

    // Check login
    accounts.map(user=>{
      if(user.email === email && user.password === password){
        setAuth({ user });
        setEmail("")
        setPassword("")
        navigate(from, {replace: true});
      }
    })
  }

  return (
    <div
      style={{
        background: `url(${img}) center center/cover`,
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
        <Form className="mb-2" onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            style={{ width: "100%" }}
            type="submit"
          >
            Login
          </Button>
        </Form>
        <p className="font-weight-normal">
          Don't have an account?
          <Link to="/register" className="text-dark m-2">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
