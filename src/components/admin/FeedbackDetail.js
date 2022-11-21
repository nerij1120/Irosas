import React,{useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdOutlineAccountCircle } from 'react-icons/md'
import RatingStar from './RatingStar'
import TopAppBar from './TopAppBar'
import {useNavigate, useParams} from 'react-router-dom'


const feedbacks = [
  {
    id: 1,
    userName: 'Nguyễn Văn A',
    drinkName: 'Iced milk coffee',
    comment: 'Cà phê ngon, giao nhanh',
    rating: "5.0",
  },
  {
    id: 2,
    userName: 'Nguyễn Văn B',
    drinkName: 'Black Coffee',
    comment: 'Cà phê đen nhưng làm quá ngọt',
    rating: "4.0",
  },{
    id: 3,
    userName: 'Nguyễn Văn C',
    drinkName: 'Latte',
    comment: 'Cà phê ngon, giao nhanh',
    rating: "5.0",
  },{
    id: 4,
    userName: 'Nguyễn Văn D',
    drinkName: 'Capuchino',
    comment: 'Giao hàng quá chậm',
    rating: "2.0",
  },{
    id: 5,
    userName: 'Nguyễn Văn E',
    drinkName: 'Americano',
    comment: 'Cà phê ngon, giao nhanh',
    rating: "5.0",
  },{
    id: 6,
    userName: 'Nguyễn Văn F',
    drinkName: 'Hot ginger juice',
    comment: 'Thái độ phục vụ chưa tốt',
    rating: "4.0",
  },{
    id: 7,
    userName: 'Nguyễn Văn G',
    drinkName: 'Hot fresh tea',
    comment: 'Cà phê ngon, giao nhanh',
    rating: "5.0",
  },{
    id: 8,
    userName: 'Nguyễn Văn H',
    drinkName: 'Thai tea',
    comment: 'Trà sữa không thơm',
    rating: "3.0",
  },{
    id: 9,
    userName: 'Nguyễn Văn I',
    drinkName: 'Matcha Ice blended',
    comment: 'Đá xay mịn, thơm, vị matcha rất ngon',
    rating: "5.0",
  },{
    id: 10,
    userName: 'Nguyễn Văn J',
    drinkName: 'Hot chocolate',
    comment: 'Thái độ nhân viên quá tệ',
    rating: "2.0",
  },
]

const FeedbackDetail = () => {
  const params = useParams()
  const [feedback, setFeedback] = useState({})
  const [reply, setReply] = useState("")
  const navigate = useNavigate();


  useEffect(()=>{
    if(params && params.id){
      feedbacks.map((fb)=> fb.id == params.id ? 
        setFeedback(fb)
      : {})
    }

  }, [])  

  const onSubmit = (e) =>{
    e.preventDefault()

    if(!reply){
      alert("Vui lòng điền câu trả lời")
      return
    }

    setReply("")

    navigate("/admin/feedbacks")
  }

  return (
    <div style={{ height:"100vh" }}>
      <TopAppBar title="Phản hồi feedback"/>
      <Container fluid className="px-4 d-flex align-items-center w-100 h-75" >
        <Row className='w-100'>
          <Col>
            <MdOutlineAccountCircle className='me-2' style={{ width:"50px", height:"50px" }}/>
            <span>{feedback.userName}</span>
          </Col>
          <RatingStar/>
          <span className="mt-2">{feedback.comment}</span>
          <hr className='w-100 mt-2'/>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phản hồi</Form.Label>
              <Form.Control as="textarea" rows={5} value={reply} onChange={(e)=>{setReply(e.target.value)}}/>
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