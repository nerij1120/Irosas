import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBox from './SearchBox';
import { BsCart2 } from 'react-icons/bs';
import OutlineButton from './OutlineButton';
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const MyNav = () => {
  const navigate = useNavigate();

  const onClick = () =>{
    navigate("/login");
  }

  return (
    <Navbar expand="lg" bg="white" className="me-2">
      <Container fluid>
        <Navbar.Brand href="/" className="me-auto nav-brand"><h2 style={{ color: "#7D6E83" }}>Irosas</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <SearchBox/>
          <Nav className="d-flex ms-auto">
            <Nav.Link to href="/" className='menu-item'>Trang chủ</Nav.Link>
            <Nav.Link href="contacts" className='menu-item'>Liên hệ</Nav.Link>
            <Nav.Link href="menu" className='menu-item'>Thực đơn</Nav.Link>
            <Nav.Link href="category" className='menu-item'>Danh mục</Nav.Link>
            <Nav.Item className='menu-item' style={{ alignItems: "center"}}><hr className='solid-vert'/></Nav.Item>
            <Nav.Link href="cart" className='cart-item' style={{ position:"relative" }}>
              <BsCart2 className='cart'/>
              Giỏ hàng
              <Badge bg="secondary" className="ms-2 cart-badge">9</Badge>
            </Nav.Link>
          </Nav>
          <OutlineButton text="Đăng nhập" className='d-flex login-btn' onClick={()=>onClick()}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav