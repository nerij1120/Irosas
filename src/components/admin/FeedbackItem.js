import React from 'react'
import DetailButton from './DetailButton'

const FeedbackItem = () => {
  return (
    <tr style={{ verticalAlign:"middle", backgroundColor: "white" }}>
          <td>Nguyễn Văn A</td>
          <td>Iced milk coffee</td>
          <td>Cà phê ngon, giao nhanh</td>
          <td>5.0/5.0</td>
          <td>
            <DetailButton href="1"/>
          </td>
    </tr>
  )
}

export default FeedbackItem