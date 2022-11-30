import React from 'react'
import { AiFillCheckSquare } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import CancelButton from './CancelButton'
import CheckButton from './CheckButton'

const OrderItem = ({order}) => {
  const navigate = useNavigate()

  const onClick = () =>{
    navigate(`order/${order.id}`)
  }

  return (
      <tr style={{ verticalAlign:"middle", backgroundColor: "white" }} onClick={onClick}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{order.address}</td>
        <td style={{ color: order.status === "Chờ xác nhận" ? 'orange' : order.status === "Đã giao" ? 'green' : order.status === "Đã hủy" ? 'red' : ''  }}>{order.status}</td>
        <td>{order.total}</td>
        <td>
            {
              order.status === "Chờ xác nhận" ? <><CheckButton/><CancelButton/></> : order.status === "Đã giao" ? <></> : order.status === "Đã hủy" ? <></> : <CheckButton/>
            }
        </td>
  </tr>
    
  )
}

export default OrderItem