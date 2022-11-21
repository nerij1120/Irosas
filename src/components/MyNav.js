import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBox from "./SearchBox";
import { BsCart2 } from "react-icons/bs";
import OutlineButton from "./OutlineButton";
import { Badge } from "react-bootstrap";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const MyNav = () => {
  const navigate = useNavigate();
  const {auth} = useAuth();

  const onClick = () => {
    navigate("/login");
  };

  return (
    <Navbar expand="lg" bg="white" className="me-2">
      <Container fluid>
        <Link to="/" className="me-auto nav-brand navbar-brand"><h2 style={{ color: "#7D6E83" }}>Irosas</h2></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox />
          <Nav className="d-flex ms-auto">
            <Link to="/" className='menu-item nav-link'>Trang chủ</Link>
            <Link to="contacts" className='menu-item nav-link'>Liên hệ</Link>
            <Link to="menu" className='menu-item nav-link'>Thực đơn</Link>
            <Link to="category" className='menu-item nav-link'>Danh mục</Link>
            <Nav.Item className='menu-item' style={{ alignItems: "center"}}><hr className='solid-vert'/></Nav.Item>
            {
              auth?.user?.type === 1 
                ? (<Link to="/admin" className="menu-item nav-link">Quản lý</Link>)
                : auth?.user?.type === 2 
                  ? (<Link to="/staff" className="menu-item nav-link">Nhân viên</Link>)
                  : <></>
            }
            <Link to="cart" className='cart-item nav-link' style={{ position:"relative" }}>
              <BsCart2 className='cart'/>
              Giỏ hàng
              <Badge bg="secondary" className="ms-2 cart-badge">
                9
              </Badge>
            </Link>
          </Nav>
          {
            auth?.user?.type 
              ? (<></>)
              : <OutlineButton text="Đăng nhập" className='d-flex login-btn' style={{ alignSelf: "flex-end" }} onClick={()=>onClick()}/>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
