import React from 'react'
import DetailButton from './DetailButton'

const FeedbackItem = ({feedback}) => {
  return (
    <tr style={{ verticalAlign:"middle", backgroundColor: "white" }}>
          <td>{feedback.userName}</td>
          <td>{feedback.drinkName}</td>
          <td>{feedback.comment}</td>
          <td>{feedback.rating}/5.0</td>
          <td>
            <DetailButton href={`${feedback.id}`} />
          </td>
    </tr>
  )
}

export default FeedbackItem