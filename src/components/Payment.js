import React from 'react'
import { Badge, Button, Form, Modal } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Payment = (props) => {
  const {auth} = useAuth()
  const location = useLocation

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>

      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="w-100 text-center" style={{ color: "#7d6e83", fontStyle: "italic", fontSize: "30px" }}>
          Thanh toán
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {
        auth?.user ? 
        (<div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span>Giỏ hàng của bạn</span>
            <Badge bg="secondary" className="rounded-pill">4</Badge>
          </h4>
          <ul class="list-group mb-3">
            {/* @foreach($payment as $food_orders) */}
              <li class="list-group-item d-flex justify-content-between lh-sm" style={{ backgroundColor: "#DFD3C3" }}>
                <div>
                  <h6 class="my-0">Iced Milk Coffee x 2</h6>
                  <small class="text-muted">Không</small>
                </div>
                <span class="text-muted">30.000đ</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm" style={{ backgroundColor: "#DFD3C3" }}>
                <div>
                  <h6 class="my-0">Latte x 1</h6>
                  <small class="text-muted">Không</small>
                </div>
                <span class="text-muted">19.000đ</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm" style={{ backgroundColor: "#DFD3C3" }}>
                <div>
                  <h6 class="my-0">Honey Orange Juice x 1</h6>
                  <small class="text-muted">Không</small>
                </div>
                <span class="text-muted">35.000đ</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm" style={{ backgroundColor: "#DFD3C3" }}>
                <div>
                  <h6 class="my-0">Hot Chocolate x 1</h6>
                  <small class="text-muted">Không</small>
                </div>
                <span class="text-muted">27.000đ</span>
              </li>
            {/* @endforeach */}
            <div id="TIPS">
              <li class="list-group-item d-flex justify-content-between" style={{ backgroundColor: "#DFD3C3" }}>
                <div>
                  <h6 class="my-0">Phí giao hàng</h6>
                </div>
                <span>
                  15.000đ
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between" style={{ backgroundColor: "#DFD3C3" }}>
                <span>Tổng cộng (VND)</span>
                <h5 style={{ color: "#7D6E83" }}><strong>111.000đ</strong></h5>
              </li>
            </div>
          </ul>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Thông tin nhận hàng</h4>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Họ và tên</label>
                <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập họ và tên.
                </div>
              </div>
  
              <div class="col-sm-6">
                <label for="lastName" class="form-label">Số điện thoại</label>
                <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập số điện thoại
                </div>
              </div>
  
              <div class="col-12">
                <label for="address" class="form-label">Địa chỉ</label>
                <input type="text" class="form-control" id="address" placeholder="06 Quang Trung" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập địa chỉ nhận hàng.
                </div>
              </div>
            </div>
  
            <hr class="my-4"/>
  
  
            <h4 class="mb-3">Thông tin thanh toán</h4>
  
            <div class="my-3">
              <div class="form-check">
                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                <label class="form-check-label" for="credit">Thẻ tín dụng</label>
              </div>
              <div class="form-check">
                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="debit">Thẻ ghi nợ</label>
              </div>
              <div class="form-check">
                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
                <label class="form-check-label" for="paypal">PayPal</label>
              </div>
            </div>
  
            <div class="row gy-3">
              <div class="col-md-6">
                <label for="cc-name" class="form-label">Tên trên thẻ</label>
                <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                <small class="text-muted">Tên đầy đủ được ghi trên thẻ</small>
                <div class="invalid-feedback">
                  Vui lòng nhập tên trên thẻ
                </div>
              </div>
  
              <div class="col-md-6">
                <label for="cc-number" class="form-label">Số thẻ tín dụng</label>
                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập số thẻ tín dụng
                </div>
              </div>
  
              <div class="col-md-6">
                <label for="cc-expiration" class="form-label">Ngày hết hạn</label>
                <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập ngày hết hạn
                </div>
              </div>
              <div class="col-md-6">
                <label for="cc-cvv" class="form-label">CVC/CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                <div class="invalid-feedback">
                  Vui lòng nhập mã bảo mật
                </div>
              </div>
            </div>
        </div>
      </div>) :
      (<div className='text-center'>
        <h3>Vui lòng đăng nhập để thanh toán</h3>
        <Link to="/login" state={{ from: location }} replace><Button>Đăng nhập</Button></Link>
      </div>)

      }
      
      </Modal.Body>
      {
        auth?.user ?
        <Modal.Footer>
        <Button variant="primary" type="submit" className="w-100">Thanh toán</Button>
      </Modal.Footer> : <></>
      }
      
      </Form>
    </Modal>
  )
}

export default Payment