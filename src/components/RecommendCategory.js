import React from 'react'
import { Col } from 'react-bootstrap'

const RecommendCategory = ({image, name}) => {
  return (
    <Col className="col-2 text-center">
      <img class="img-rcmCate" src={image} alt="" />
      <div id="shape"></div>
      <h5>{name}</h5>
    </Col>
  )
}

export default RecommendCategory