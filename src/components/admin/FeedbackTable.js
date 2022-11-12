import React from 'react'
import { Container, Table } from 'react-bootstrap'
import AdminPagination from './AdminPagination'
import FeedbackItem from './FeedbackItem'

const FeedbackTable = () => {
  return (
    <Container className='mt-5 d-flex flex-column' fluid>
      <Table responsive="lg" className='mt-3'>
      <thead>
        <tr style={{ verticalAlign:"middle" }}>
          <th>Tên</th>
          <th>Sản phẩm</th>
          <th>Bình luận</th>
          <th>Đánh giá</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>
        <FeedbackItem/>

      </tbody>
    </Table>
    <AdminPagination className="d-flex ms-auto me-2  mt-5"/>
    </Container>
  )
}

export default FeedbackTable