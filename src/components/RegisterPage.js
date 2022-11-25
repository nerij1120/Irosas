import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import useAuth from "../hooks/useAuth";
import img from "../img/login_bg.jpg";

const LoginPage = () => {
  const { accounts, setAccounts } = useAuth()
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ confirmPassword, setConfirmPassword ] = useState("")

  const onSubmit = (e) =>{
    e.preventDefault()

    if(confirmPassword !== password){
      alert("Mật khẩu xác nhận không khớp")
      return;
    }

    var isExisted = false 
    accounts?.map(user =>{
        if(email === user.email){
          alert("Email đã được sử dụng, vui lòng dùng Email khác");
          isExisted = true
        }
      }
    )

    if(!isExisted){
      const user = {
        id: v4(),
        email,
        name: "",
        password,
        phone: "",
        address: "",
        type: 3,
        photo: "/images/customer_profile.png"
      }

      setAccounts([...accounts, user])
      alert("Tạo tài khoản thành công")
    }
    
  }

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
        <Form className="mt-4 mb-2" onSubmit={onSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
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

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
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
