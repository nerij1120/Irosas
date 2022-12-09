import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import img from "../img/login_bg.jpg";


const LoginPage = () => {
  const { auth, accounts, setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();


  const onSubmit = (e)  =>{
    e.preventDefault();

    // Check login
    var success = false
    accounts.map((user)=>{
      if(user.email === email && user.password === password){
        setAuth({ user });
        setEmail("")
        setPassword("")
        success = true
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: "true",
        }).fire(
          {
            icon: "success",
            text: "Đăng nhập thành công"
          }
        )
      }
    }
  )

    if(!success){
      Swal.fire(
        {
          icon: "error",
          title: "Đăng nhập thất bại",
          text: "Email hoặc mật khẩu sai",
        }
      )
    }
  }

  useEffect(()=>{
    if(auth?.user){
      navigate(from, {replace: true});
    }
  }, [auth?.user])

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
      <Container
      className="px-5"
        style={{
          width:"40%",
          display: "flex",
          justifyContent: "center",
          border: "1px solid #fff",
          borderRadius: "10pt",
          backgroundColor: "#DFD3C3",
        }}
      >
        <Row>
          <h2 className="text-center mt-3" style={{ fontFamily: "Work Sans", color: "#7d6e83", fontWeight: "600" }}>IROSAS</h2>
          <h4 className="text-center" style={{ fontFamily: "Work Sans", color: "#7d6e83", fontStyle: "italic" }}>Glad to see you here</h4>
          <h3 className="text-center" style={{ fontFamily: "Work Sans", color: "#7d6e83", fontWeight: "600" }}>Đăng nhập</h3>
          <MdOutlineAccountCircle className="ms-auto me-auto" style={{ width: "200px", height:"200px" }}/>
        <Form  onSubmit={onSubmit} className="mt-3">
        <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="username"
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
          <p className="font-weight-normal text-end">
          <Link className="text-dark m-2" style={{ textDecoration: "none" }}>
            Quên mật khẩu?
          </Link>
        </p>
          <Button
            style={{ width: "100%" }}
            type="submit"
          >
            Đăng nhập
          </Button>
        </Form>

        <p className="font-weight-normal ms-auto me-auto mt-5 text-center">
          Bạn chưa có tài khoản?
          <Link to="/register" className="text-dark m-2">
            Đăng ký ngay
          </Link>
        </p>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
