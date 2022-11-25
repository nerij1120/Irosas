import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css';
import {
  FaRegEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'
import background from "../img/ContactPage/backgroudContact.png"
export default function ContactsPage() {
  return (<
    Container fluid style={
      {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '701px'
      }} >

    <Row className="mb-9">
      <Col lg="8">
        <h1 className="display-4 mb-3" style={{ 
          fontFamily: "Courier New Courier",
          color: "#7d6e83", 
          marginTop: "25%", 
          marginLeft: "20%" }}> ABOUT US </h1>

        <h2 className="display-4 col-md-7 mb-2" style={{ 
          fontFamily: "Courier New Courier", 
          color: "burlywood", 
          fontStyle: "italic", 
          marginLeft: "20%" }} > Bạn là bàn đạp để chúng tôi phát triển </h2>

        <p class="display-8 col-md-5" style={{ 
          fontFamily: "Courier New Courier", 
          marginLeft: "20%" }}> 
        Với mục tiêu đem lại trải nghiệm tốt nhất cho khách hàng, 
        IROSAS COFFEE luôn sẵn sàng phục vụ những sản phẩm tốt nhất cho mọi người!! 
        </p>
      </Col>
      
      <Col>
        <p class="display-8" style={{ marginTop: "65%" }}>
          <FaRegEnvelope style={{ color: "black", marginRight: "10px" }} />
          <a href="mailto:admin_irosas@gmail.com">
            admin_irosas@gmail.com
          </a>
        </p>
        <p class="display-8">
          <FaPhone style={{ color: "black", marginRight: "10px" }} />
          (917) 112 - 245 </p>
        <p class="display-8">
          <FaMapMarkerAlt style={{ color: "black", marginRight: "10px" }} />KTX Khu A - ĐHQG HCM </p>
      </Col>
    </Row>
  </Container>
  );
}