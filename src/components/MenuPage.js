import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import MenuItem from './MenuItem'

const MenuPage = () => {
  return (
    <div>
        <Container fluid 
        style={{ 
          backgroundImage: `url(/images/dau_trang.png`,
          height: "80vh",
          backgroundSize:"100% 100%",
          display: "flex"
        }}> {/* <!------Introducer--> */}
            <Row className='my-auto ms-5'>
                <p id="p1">Thưởng thức hương vị</p>
                <p id="p2">nguyên chất</p>
                <p id="p3">"Tràn đầy năng lượng mỗi ngày cùng thức uống tuyệt vời"</p>
                <Col>
              <Button Button className="btn-default get"> Đặt ngay <i class="fas fa-long-arrow-right" id="arrowGet"></i></Button>
            </Col>
            </Row>    
            
        </Container> {/* <!-----End Introducer--> */}

        <Container className="mt-4"> {/* <!-------Body--> */}
                <Col className="d-flex align-items-center">  {/* <!-----headline-menu-product--> */}
                    <span id="p1">Thực đơn</span>
                    <div className="btn-group ms-auto align-items-center d-flex">
                        <span className='p-0'>Danh mục:</span>
                        <Form.Group controlId="formStatus">
              <Form.Select aria-label="Default select example" className='ms-4'>
                <option value="Tất cả">Tất cả</option>
                <option value="Coffee">Coffee</option>
                <option value="Tea">Tea</option>
                <option value="Ice Blended">Ice Blended</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Fruit Juice">Fruit Juice</option>
                <option value="Milk Tea">Milk Tea</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Shakes">Shakes</option>
                <option value="Soft Drink">Soft Drink</option>
              </Form.Select>
            </Form.Group>
                    </div>  {/* <!-----End headline-menu-product--> */}
                </Col>
                <Row className="mt-3" style={{ justifyContent: "space-around" }}> {/* <!------Menu Product--> */}
                    <Col className="col-3">
                      <MenuItem img="assets/image/icecoffee.png" name="Iced Milk Coffee" price="15.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/thaitea.png" name="Thai Tea" price="25.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/strawberry.png" name="Strawberry Cocktail" price="39.000đ"/>
                    </Col> 
                </Row>
                <Row className="mt-3" style={{ justifyContent: "space-around" }}>
                    <Col className="col-3">
                    <MenuItem img="assets/image/americano.png" name="Americano" price="20.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/capuchino.png" name="Capuchino" price="22.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/latte.png" name="Latte" price="19.000đ"/>
                    </Col>
                </Row>
                <Row className='mt-3' style={{ justifyContent:"space-around" }}>
                    <Col className="col-3">
                    <MenuItem img="assets/image/blackcoffee.png" name="Black Coffee" price="15.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/gingerjuice.png" name="Hot Ginger Juice" price="29.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/chocolate.png" name="Hot Chocolate" price="27.000đ"/>
                    </Col>
                </Row>
                <Row className="mt-3" style={{ justifyContent: "space-around" }}>
                <Col className="col-3">
                <MenuItem img="assets/image/orangejuice.png" name="Honey Orange Juice" price="35.000đ"/>
                </Col>
                <Col className="col-3">
                    <MenuItem img="assets/image/freshtea.png" name="Hot Fresh Tea" price="17.000đ"/>
                    </Col>
                    <Col className="col-3">
                    <MenuItem img="assets/image/matcha.png" name="Matcha Ice Blended" price="39.000đ"/>
                    </Col>
                </Row> {/* <!-------End Menu Product--> */}
        </Container> {/* <!------End Body--> */}
        
            </div>
  )
}

export default MenuPage