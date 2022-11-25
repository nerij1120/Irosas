import React from "react";

const CategoryItem = ({ src, text, alt }) => {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
