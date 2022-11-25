import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import {
  FaMapMarkerAlt, FaPhone, FaRegEnvelope
} from 'react-icons/fa';
import { Link } from "react-router-dom";
import background from "../img/ContactPage/backgroudContact.png";
import '../index.css';
export default function ContactsPage() {
  return (<
    Container fluid style={
      {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:"100% 100%",
        width: '100%',
        height: '100vh'
      }} >

    <Row className="mb-9">
      <Col lg="8">
        <h1 className="display-4 mb-3" style={{ 
          fontFamily: "Courier New Courier",
          color: "#7d6e83", 
          fontWeight: 600,
          marginTop: "25%", 
          marginLeft: "20%" }} id="p1"> ABOUT US </h1>

        <h2 className="display-4 col-md-7 mb-2" style={{ 
          fontFamily: "Courier New Courier", 
          color: "burlywood", 
          fontStyle: "italic", 
          marginLeft: "20%" }} id="p2" > Bạn là bàn đạp để chúng tôi phát triển </h2>

        <p class="display-8 col-md-5" style={{ 
          fontFamily: "Courier New Courier", 
          marginLeft: "20%" }} id="p3"> 
        Với mục tiêu đem lại trải nghiệm tốt nhất cho khách hàng, 
        IROSAS COFFEE luôn sẵn sàng phục vụ những sản phẩm tốt nhất cho mọi người!! 
        </p>
      </Col>
      
      <Col style={{ color:"#7d6e83" }}>
        <p class="display-8" style={{ marginTop: "65%" }}>
          <FaRegEnvelope className="me-2"/>
          <a href="mailto:admin_irosas@gmail.com" className="menu-item nav-link d-inline-block">
            admin_irosas@gmail.com
          </a>
        </p>
        <p class="display-8">
          <FaPhone className="me-2" />
          (917) 112 - 245 </p>
        <p class="display-8">
          <FaMapMarkerAlt className="me-2" />KTX Khu A - ĐHQG HCM </p>
      </Col>
    </Row>
  </Container>
  );
}