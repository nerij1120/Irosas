import React from 'react'
import { Modal, Button, Form, Row } from 'react-bootstrap'
import { BsCameraFill } from 'react-icons/bs'

const AddCategoryModal = (props) => {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form style={{ backgroundColor:"#DFD3C3" }}>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center">
          Thêm danh mục
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Tên</Form.Label>
          <Form.Control type="text" placeholder="Nhập tên" />
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
        <Button className="px-4" variant='primary' type="submit">Tạo</Button>
      </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default AddCategoryModal