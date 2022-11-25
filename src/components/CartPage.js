//type:       "npm i mdb-react-ui-kit"
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput, MDBInputGroup, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader,
  MDBModalTitle, MDBRadio, MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead
} from "mdb-react-ui-kit";
import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import background from "../img/ContactPage/backgroudContact.png";
import CartItem from "./CartItem";
import Payment from "./Payment";

const CartPage = () => {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  const [paymentModal, setShowPaymentModal] = useState(false);
  const showModal = () => setShowPaymentModal(true)

  return (
    <div>
      <Container fluid
        style={{ 
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: "80vh",
          backgroundSize:"100% 100%",
          display: "flex"
        }}> {/* <!------Introducer --> */}
          <Row className='my-auto ms-5'>
            <p id="p1">Thưởng thức hương vị</p>
            <p id="p2">nguyên chất</p>
            <p id="p3">Sự hài lòng của bạn là niềm động lực của chúng tôi !</p>
            </Row>

        </Container> {/* <!-----End Introducer--> */}

        <Container className='mt-4'> {/* <!----Body Part--> */}
          <span id="p2">Giỏ hàng</span>
          <Table responsive className='mt-3'>
            <thead>
              <tr style={{ verticalAlign:"middle" }}>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                <CartItem className="border-bottom border-5 border-white" image="assets/image/icecoffee.png" name="Iced Milk Coffee" price={15000} quantity={2}/>
              <CartItem className="border-bottom border-5 border-white" image="assets/image/latte.png" name="Latte" price={19000} quantity={1}/>
              <CartItem className="border-bottom border-5 border-white" image="assets/image/orangejuice.png" name="Honey Orange Juice" price={35000} quantity={1}/>
              <CartItem className="border-bottom border-5 border-white" image="assets/image/chocolate.png" name="Hot Chocolate" price={27000} quantity={1}/>
              <tr className="border-bottom border-5 border-white" style={{ verticalAlign:"middle" }}>
                <td></td>
                <td></td>
                <td></td>
                <td className='ms-3 text-center'><h5>Tổng cộng:</h5></td>
                <td className='ms-3 text-center' style={{ color: "#7d6e53" }}><h5>96.000đ</h5></td>
                <td><Button className="w-100" variant="primary" onClick={()=>setShowPaymentModal(true)}>Thanh toán</Button></td>

              </tr>
            </tbody>
          </Table>
        </Container>
    <Payment show={paymentModal} onHide={()=>setShowPaymentModal(false)}/>
    </div>
  );
}
export default CartPage

//====================================================================
// const CartPage = () => {
//   return (
//     <div>CartPage</div>
//   )
// }

// export default CartPage