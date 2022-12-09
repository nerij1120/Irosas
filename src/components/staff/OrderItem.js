import React, { useState } from 'react'
import { AiFillCheckSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import useDatabase from '../../hooks/useDatabase'
import DetailButton from '../admin/DetailButton'
import CancelButton from './CancelButton'
import CancelOrder from './CancelOrder'
import CheckButton from './CheckButton'

const OrderItem = ({order}) => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const {orders, setOrders} = useDatabase()

  const onClick = () =>{
    navigate(`order/${order.id}`)
  }

  const handleCancelOrder = () =>{
    order.status = "Đã hủy"

    setOrders(
      orders.map(ord=>
        ord.id === order.id ?
        order : ord
      ) 
    )
  }

  const handleFinishOrder = () =>{
    order.status = "Đã giao"

    setOrders(
      orders.map(ord=>
        ord.id === order.id ?
        order : ord
      ) 
    )
  }

  const handleConfirmOrder = () =>{
    order.status = "Đang pha chế"

    setOrders(
      orders.map(ord=>
        ord.id === order.id ?
        order : ord
      ) 
    )
  }

  const handleShipOrder = () =>{
    order.status = "Đang giao hàng"

    setOrders(
      orders.map(ord=>
        ord.id === order.id ?
        order : ord
      ) 
    )
  }

  return (
    <>
      <tr style={{ verticalAlign:"middle", backgroundColor: "white" }}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{order.address}</td>
        <td style={{ color: order.status === "Chờ xác nhận" ? 'orange' : order.status === "Đã giao" ? 'green' : order.status === "Đã hủy" ? 'red' : order.status === "Đang giao hàng" ? 'gold' : order.status === "Đang pha chế"? "burlywood": ""  }}>{order.status}</td>
        <td>{order.date}</td>
        <td>{order.total?.toLocaleString()} đ</td>
        <td>
            <DetailButton href={`order/${order.id}`} />
            {
              order.status === "Chờ xác nhận" ? <><CheckButton onClick={handleConfirmOrder}/><CancelButton onClick={()=>setShowModal(true)}/></> : order.status === "Đã giao" ? <></> : order.status === "Đã hủy" ? <></> : order.status === "Đang pha chế" ? <CheckButton onClick={handleShipOrder}/> : <CheckButton onClick={handleFinishOrder}/>
            }
        </td>
      </tr>
      <CancelOrder handleCancelOrder={handleCancelOrder} show={showModal} onHide={()=>setShowModal(false)}/>
    </>
  )
}

export default OrderItem