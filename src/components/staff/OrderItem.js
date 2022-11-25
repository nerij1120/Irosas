import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderItem = ({order}) => {
  const navigate = useNavigate()

  const onClick = () =>{
    navigate('order/'+`${order.id}`)
  }

  return (
      <tr style={{ verticalAlign:"middle", backgroundColor: "white" }} onClick={onClick}>
        <td>{order.id}</td>
        <td>{order.name}</td>
        <td>{order.address}</td>
        <td style={{ color: order.status === "Chờ xác nhận" ? 'orange' : order.status === "Đã giao" ? 'green' : order.status === "Đã hủy" ? 'red' : ''  }}>{order.status}</td>
        <td>{order.total}</td>
        <td>

        </td>
  </tr>
    
  )
}

export default OrderItem