//type:       "npm i mdb-react-ui-kit"
import React, { useState } from 'react'
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRadio,
  MDBInputGroup
} from "mdb-react-ui-kit";

const CartPage = () => {
  const [gridModal, setGridModal] = useState(false);

  const toggleShow = () => setGridModal(!gridModal);

  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBTable responsive>
              <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                  </th>
                  <th scope="col">Đơn giá</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Tổng tiền</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                <tr className="border-bottom border-5 border-white" style={{ backgroundColor: "#d0b8a8" }}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://product.hstatic.net/1000075078/product/1665655345_tch-sua-da_d490c8fe35bd4380a9cb68e4fb5bfbf3_large.jpg"
                        fluid
                        className="rounded-3"
                        style={{ width: "100px" }}
                        alt="Drink"
                      />
                      <div className="flex-column ms-4 mt-4">
                        <p>Iced Milk Coffee</p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      15000
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      {/* <MDBBtn className="px-0" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn> */}

                      <MDBInput
                        min={0}
                        type="number"
                        size="xs"
                        style={{ width: "50px" }}
                        defaultValue={1}
                      />

                      {/* <MDBBtn className="px-0" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn> */}
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="ms-2" style={{ fontWeight: "500" }}>
                      $9.99
                    </p>
                  </td>
                </tr>
                <tr className="border-bottom border-5 border-white" style={{ backgroundColor: "#d0b8a8" }}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqgzQXdqCGnf-CDaSPmEQDImKvZYGaypDQvSRMVZn4THoKaEVlP8Dbw6vgIV3MluNYtcM&usqp=CAU"
                        fluid
                        className="rounded-3"
                        style={{ width: "100px" }}
                        alt="Drink"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                          Latte
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      19000
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      {/* <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn> */}

                      <MDBInput
                        min={0}
                        type="number"
                        size="xs"
                        style={{ width: "50px" }}
                        defaultValue={1}
                      />

                      {/* <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn> */}
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="ms-2" style={{ fontWeight: "500" }}>
                      $13.50
                    </p>
                  </td>
                </tr>
                <tr className="border-bottom border-5 border-white" style={{ backgroundColor: "#d0b8a8" }}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Homemade_Dalgona_Coffee.jpg/1200px-Homemade_Dalgona_Coffee.jpg"
                        fluid
                        className="rounded-3"
                        style={{ width: "100px", height: "7rem" }}
                        alt="Drink"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                          Bac Xiu
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      25000
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      {/* <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn> */}

                      <MDBInput
                        min={0}
                        type="number"
                        size="xs"
                        style={{ width: "50px" }}
                        defaultValue={1}
                      />

                      {/* <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn> */}
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="ms-2" style={{ fontWeight: "500" }}>
                      $19.99
                    </p>
                  </td>
                </tr>
                <tr className="border-bottom border-5 border-white" style={{ backgroundColor: "#d0b8a8" }}>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://product.hstatic.net/1000075078/product/1639377904_bac-siu_83abc895d7b748ecb20b45f095a0146e_large.jpg"
                        fluid
                        className="rounded-3"
                        style={{ width: "100px", height: "7rem" }}
                        alt="Drink"
                      />
                      <div className="flex-column ms-4">
                        <p className="mb-2">
                          Light coffee
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                      18000
                    </p>
                  </td>
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      {/* <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn> */}

                      <MDBInput
                        min={0}
                        type="number"
                        size="xs"
                        style={{ width: "50px" }}
                        defaultValue={1}
                      />

                      {/* <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn> */}
                    </div>
                  </td>
                  <td className="align-middle">
                    <p className="ms-2" style={{ fontWeight: "500" }}>
                      $18.00
                    </p>
                  </td>
                </tr>
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center align-items-center h-20">
          <MDBCol style={{ textAlign: "right", fontWeight: "bold" }}>Tổng cộng: 34000</MDBCol>
          <MDBCol style={{ textAlign: "center", fontWeight: "bold" }}>

            <MDBBtn onClick={toggleShow}>Thanh toán</MDBBtn>
            <MDBModal tabIndex='-1' show={gridModal} setShow={setGridModal}>
              <MDBModalDialog size="xl">
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle className="ms-5 w-100" style={{ fontStyle: "italic", fontSize: "30px", color: "#7d6e83" }}>Thanh Toán</MDBModalTitle>
                    <MDBBtn
                      type='button'
                      className='btn-close'
                      color='none'
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    <div className='container-fluid bd-example-row'>
                      <div className='row'>
                        <div className='col-md-3 col-example'><p style={{ paddingLeft: "70px", paddingTop: "10px" }}>Thông tin nhận hàng</p></div>
                        <div className='col-md-4 ms-auto col-example'>Giỏ hàng của bạn</div>
                      </div>
                      <div className='row'>
                        <div className='col-md-3 col-example'>
                          Họ và tên
                          <MDBInputGroup>
                            <input className='form-control' style={{ marginLeft: "90px", marginTop: "10px" }} type='text' />
                          </MDBInputGroup>
                        </div>
                        <div className='col-md-5 col-example'>
                          <p className="ms-5">
                            Số điện thoại
                            <MDBInputGroup>
                              <input className='form-control' style={{ marginLeft: "145px", marginTop: "10px", marginRight: "100px" }} type='text' />
                            </MDBInputGroup>
                          </p>
                        </div>
                        <div className='col-md-4 col-example' style={{ backgroundColor: "#d0b8a8" }}>
                          <MDBTable>
                            <MDBTableHead>
                              <tr>
                                <th scope='col'>Latte coffee</th>
                                <th scope='col'>30000đ</th>
                              </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                              <tr>
                                <td>Phí giao hàng</td>
                                <td>15000đ</td>
                              </tr>
                              <tr>
                                <td>Tổng cộng</td>
                                <td>45000đ</td>
                              </tr>
                            </MDBTableBody>
                          </MDBTable>
                        </div>
                        <div className='row'>
                          <div className='col-md-5 col-example'>
                            <p style={{paddingLeft:"95px",textAlign:"left",marginBottom:"0px"}}>Địa chỉ</p>
                            <MDBInputGroup>
                              <input className='form-control' style={{ marginLeft: "90px", marginTop: "10px", marginRight: "20px" }} type='text' />
                            </MDBInputGroup>
                          </div>
                        </div>
                        <div className='row'>
                          <p style={{ textAlign: "left", paddingLeft: "95px", marginTop: "30px" }}>Thông tin thanh toán</p>
                          <div style={{ textAlign: "left", paddingLeft: "95px" }}>
                            <MDBRadio name='flexRadioDefault' label='Thẻ tín dụng' />
                            <MDBRadio name='flexRadioDefault' label='Thẻ ghi nợ' />
                            <MDBRadio name='flexRadioDefault' label='PayPal' />
                          </div>
                        </div>
                        <div className='row' style={{ height: "60px", marginTop: "50px" }}>
                          <label style={{ textAlign: "left", paddingLeft: "95px", marginBottom: "10px" }}>
                            Tên trên thẻ
                            <span style={{ paddingLeft: "300px" }}>Số thẻ</span>
                          </label>
                          <MDBInputGroup className='mb-2' style={{ display: "inline", width: "100px" }}>
                            <input className='form-control' type='text' style={{ marginLeft: "80px" }} />
                          </MDBInputGroup>

                          <MDBInputGroup className='mb-5' style={{ width: "300px", marginLeft: "360px" }}>
                            <input className='form-control' type='text' />
                          </MDBInputGroup>
                        </div>
                        <div className='row' style={{ height: "60px", marginTop: "50px" }}>
                          <label style={{ textAlign: "left", paddingLeft: "95px", marginBottom: "10px" }}>
                            Hết hạn
                            <span style={{ paddingLeft: "330px" }}>CVC/CVV</span>
                          </label>
                          <MDBInputGroup className='mb-2' style={{ display: "inline", width: "100px" }}>
                            <input className='form-control' type='text' style={{ marginLeft: "80px" }} />
                          </MDBInputGroup>

                          <MDBInputGroup className='mb-5' style={{ width: "300px", marginLeft: "360px" }}>
                            <input className='form-control' type='text' />
                          </MDBInputGroup>
                        </div>
                      </div>
                    </div>
                  </MDBModalBody>
                  <MDBModalFooter>
                    <MDBBtn style={{width:"1000px", marginRight:"50px"}}>Thanh toán</MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section >
  );
}
export default CartPage

//====================================================================
// const CartPage = () => {
//   return (
//     <div>CartPage</div>
//   )
// }

// export default CartPage