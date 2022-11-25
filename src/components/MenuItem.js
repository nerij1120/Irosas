import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

const MenuItem = ({img, name, price}) => {
  return (
    <Card style={{ borderRadius: "10pt" }}>
      <Card.Body className='px-0 pt-0 pb-2'>
      <img class="img-bestSeller" src={img} alt="" />
      <h5 className="product-name ms-2 mt-2">{name}</h5>
      <Col className="d-flex">
          <span className="ms-2 product-price">{price}</span>
          <Button  className="ms-auto me-2" variant="outline-primary">Thêm vào giỏ
              <i className="fa-solid fa-cart-shopping" id="shopping-cart-icon"></i>
          </Button>
      </Col>
      </Card.Body>
    </Card>
  )
}

export default MenuItem