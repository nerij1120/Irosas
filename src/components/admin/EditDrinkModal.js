import React from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import { BsCameraFill } from 'react-icons/bs'


const EditDrinkModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form style={{ backgroundColor:"#DFD3C3" }}>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
          Chỉnh sửa thức uống
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập tên" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCategory">
          <Form.Label>Danh mục</Form.Label>
          <Form.Select aria-label="Default select example">
            <option value="0">Coffee</option>
            <option value="1">Tea</option>
            <option value="2">Milk Tea</option>
            <option value="3">Ice Blended</option>
            <option value="4">SoftDrink</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Giá</Form.Label>
          <Form.Control type="number" placeholder="Nhập giá" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Hình ảnh</Form.Label>
          <Form className='image-form form-control'>
            <label className='image-form--label'>
              <Row>
                <BsCameraFill/>
                <p className='mt-2'>Thêm hình ảnh</p>
              </Row>
            </label>
            <input type="file" className='image-form--input'/>
          </Form>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="px-4" variant='outline-primary' onClick={props.onHide}>Hủy</Button>
        <Button className="px-4" variant='primary' type="submit">Lưu</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditDrinkModal