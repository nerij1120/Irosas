import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { RiDeleteBinLine } from 'react-icons/ri'


const CartItem = ({image,name,quantity,price,className}) => {
  return (
    <tr className={className} style={{ backgroundColor: "#d0b8a8", verticalAlign:"middle" }}>
      <td className='p-0'><img className='img-cart' src={image} alt=""/></td>
      <td><p className="ms-5 me-auto" style={{ display: "inline-block" }}>{name}</p></td>
      <td  className='ms-3 me-auto text-center'>
        <Row>
            <span>Đơn giá</span>
            <p>{price.toLocaleString()}</p>
          </Row>
      </td>
      <td>
        <Col  className='d-flex align-items-center'>
        <span className='ms-auto'>Số lượng:</span>
          <AiOutlineMinusCircle className='ms-3' style={{ width: "32px", height: "32px", cursor: "pointer" }}/>
          <Form.Control min={1} className='ms-3' type='number' value={quantity} style={{ width: "50px"}}/>
          <AiOutlinePlusCircle className='ms-3 me-auto' style={{ width: "32px", height: "32px", cursor: "pointer" }}/>
        </Col>
        
      </td>
      <td className='ms-3 text-center'>
        <Row>
            <span>Tổng tiền</span>
            <p>{(price * quantity).toLocaleString()}</p>
          </Row>
      </td>
      <td>
          <RiDeleteBinLine className='ms-auto me-5' style={{ width: "32px", height: "32px", cursor: "pointer" }}/>
      </td>
    </tr>
  )
}

export default CartItem