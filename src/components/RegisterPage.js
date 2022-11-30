import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import useAuth from "../hooks/useAuth";
import img from "../img/login_bg.jpg";

const LoginPage = () => {
  const { accounts, setAccounts } = useAuth()
  const [ email, setEmail ] = useState("")
  const navigate = useNavigate()
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

      navigate(-1)
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
      <Container
        className="px-5"
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          border: "1px solid #fff",
          borderRadius: "10pt",
          backgroundColor: "#DFD3C3",
        }}
      >
        <Row>
        <h2 className="text-center mt-3" style={{ fontFamily: "Work Sans", color: "#7d6e83", fontWeight: "600" }}>IROSAS COFFEE</h2>
          <h3 className="text-center mt-2" style={{ fontFamily: "Work Sans", color: "#7d6e83", fontWeight: "600" }}>Đăng ký</h3>
        <Form className="mt-5" onSubmit={onSubmit}>
          <Form.Label>Email</Form.Label>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nhập lại mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button style={{ width: "100%" }} className="mt-3" type="submit">
            Đăng ký
          </Button>
        </Form>
        <p className="mr-2  ms-auto me-auto mt-5 text-center">
          Đã có tài khoản?
          <Link to="/login" className="text-dark m-2">
            Đăng nhập
          </Link>
        </p>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
