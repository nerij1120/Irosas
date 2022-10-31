import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaRegEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa'

const Footer = () => {
  return (
    <Container className='footer' fluid>
      <span className='copy-right'>Copyright 2022</span>
      <Container className='d-flex ms-5 me-auto' style={{ alignItems: "center", flex:"1" }}>
        <hr className='solid me-2'/>
        <h2 style={{ color:"#fff" }}>Irosas</h2>
      </Container>
      
      <Container >
        <Row className='ms-auto'>
          <Col className='me-auto d-flex footer-row'>
          <FaRegEnvelope style={{ color:"white", marginRight:"10px" }}/>
          admin.irosas@gmail.com
        </Col>
        <Col className='me-auto d-flex footer-row'>
          <FaPhone style={{ color:"white", marginRight:"10px" }}/>
          (917) 112-245
        </Col>
        <Col className=' d-flex footer-row'>
          <FaMapMarkerAlt style={{ color:"white", marginRight:"10px" }}/>
          KTX Khu A - ĐHQG HCM
        </Col>
        </Row>
      
      </Container>
      
    </Container>
  )
}

// (
//   <Box>
//     <h1 style={{ color: "green", 
//                  textAlign: "center", 
//                  marginTop: "-50px" }}>
//       GeeksforGeeks: A Computer Science Portal for Geeks
//     </h1>
//     <Container>
//       <Row>
//         <Column>
//           <Heading>About Us</Heading>
//           <FooterLink href="#">Aim</FooterLink>
//           <FooterLink href="#">Vision</FooterLink>
//           <FooterLink href="#">Testimonials</FooterLink>
//         </Column>
//         <Column>
//           <Heading>Services</Heading>
//           <FooterLink href="#">Writing</FooterLink>
//           <FooterLink href="#">Internships</FooterLink>
//           <FooterLink href="#">Coding</FooterLink>
//           <FooterLink href="#">Teaching</FooterLink>
//         </Column>
//         <Column>
//           <Heading>Contact Us</Heading>
//           <FooterLink href="#">Uttar Pradesh</FooterLink>
//           <FooterLink href="#">Ahemdabad</FooterLink>
//           <FooterLink href="#">Indore</FooterLink>
//           <FooterLink href="#">Mumbai</FooterLink>
//         </Column>
//         <Column>
//           <Heading>Social Media</Heading>
//           <FooterLink href="#">
//             <i className="fab fa-facebook-f">
//               <span style={{ marginLeft: "10px" }}>
//                 Facebook
//               </span>
//             </i>
//           </FooterLink>
//           <FooterLink href="#">
//             <i className="fab fa-instagram">
//               <span style={{ marginLeft: "10px" }}>
//                 Instagram
//               </span>
//             </i>
//           </FooterLink>
//           <FooterLink href="#">
//             <i className="fab fa-twitter">
//               <span style={{ marginLeft: "10px" }}>
//                 Twitter
//               </span>
//             </i>
//           </FooterLink>
//           <FooterLink href="#">
//             <i className="fab fa-youtube">
//               <span style={{ marginLeft: "10px" }}>
//                 Youtube
//               </span>
//             </i>
//           </FooterLink>
//         </Column>
//       </Row>
//     </Container>
//   </Box>
// );

export default Footer