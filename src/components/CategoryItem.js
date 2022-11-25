import React from "react";
import { Card, Col } from "react-bootstrap";

const CategoryItem = ({ src, text, alt }) => {
  return (
    <Card style={{ borderRadius: "10pt" }}>
      <Card.Img variant="top" className="img-bestSeller" src={src}alt={alt}/>
      <Card.ImgOverlay className="d-flex">
        <Card.Text className="ms-auto me-auto mt-auto" style={{ color: "white", textSize: "20px", fontWeight:"600" }}>
        <h4>{text}</h4>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CategoryItem;
