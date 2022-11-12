import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import RatingStar from './RatingStar'
import TopAppBar from './TopAppBar'
import {useNavigate} from 'react-router-dom'

const FeedbackDetail = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height:"100vh" }}>
      <TopAppBar title="Phản hồi feedback"/>
      <Container fluid className="px-4 d-flex align-items-center w-100 h-75" >
        <Row className='w-100'>
          <Col>
            <MdOutlineAccountCircle className='me-2' style={{ width:"50px", height:"50px" }}/>
            <span>Nguyễn Văn A</span>
          </Col>
          <RatingStar/>
          <span className="mt-2">Cà phê ngon, giao hàng nhanh</span>
          <hr className='w-100 mt-2'/>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phản hồi</Form.Label>
              <Form.Control as="textarea" value="Cảm ơn quý khách. Sự hài lòng của bạn là niềm vinh hạnh và sự tiếp thêm động lực của chúng tôi ! Chúc bạn có một ngày mới tốt lành" rows={5} />
            </Form.Group>
            <Col className='float-end'>
              <Button className='px-4 me-2' onClick={()=>navigate("/admin/feedbacks")} variant="outline-primary">Trở về</Button>
              <Button className='px-4' type="submit" variant="primary">Gửi</Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </div>
  )
}

export default FeedbackDetail