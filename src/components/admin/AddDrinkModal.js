import React, {useState, useRef} from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import { BsCameraFill } from 'react-icons/bs'


const AddDrinkModal = (props) => {
  const [name, setName] = useState('')
  const [category, setCategory] = useState(0)
  const [price, setPrice] = useState(0)
  const [photo, setPhoto] = useState(null)
  const imageFormControl = useRef()

  const changeHandler = (e) =>{
    const file = e.target.files[0]
    const reader = new FileReader()
    const limit = 1024 * 1024 * 2
    if(file['size'] > limit){
      alert("Vui lòng chọn file có kích thước nhỏ hơn")
    }
    reader.onloadend = (file)=>{
      setPhoto(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const openFileDialog = (e) =>{
    imageFormControl.current.click()
  }

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form style={{ backgroundColor:"#DFD3C3" }}>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
          Thêm thức uống
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập tên" value={name} onChange={(e)=>setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Danh mục</Form.Label>
          <Form.Select aria-label="Default select example" value={category} onSelect={(e)=>setCategory(e.target.value)}>
            <option value="0">Coffee</option>
            <option value="1">Tea</option>
            <option value="2">Milk Tea</option>
            <option value="3">Ice Blended</option>
            <option value="4">SoftDrink</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice" value={price} onChange={(e)=>setPrice(e.target.value)}>
          <Form.Label>Giá</Form.Label>
          <Form.Control type="number" placeholder="Nhập giá" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Hình ảnh</Form.Label>
          {photo !== null? 
          <>
            <img className='image-form form-control' src={photo} onClick={openFileDialog} style={{padding: "0"}}/> 
            <Form className='image-form form-control'  style={{ display: "none" }} >
              <input ref={imageFormControl} type="file" className='image-form--input' onChange={changeHandler}/>
            </Form>
          </>: 
          
          <Form className='image-form form-control'>
            <label className='image-form--label'>
              <Row>
                <BsCameraFill/>
                <p className='mt-2'>Thêm hình ảnh</p>
              </Row>
            </label>
            <input type="file" className='image-form--input' onChange={changeHandler}/>
          </Form>}
          
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="px-4" variant='outline-primary' onClick={props.onHide}>Hủy</Button>
        <Button className="px-4" variant='primary' type="submit">Tạo</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddDrinkModal