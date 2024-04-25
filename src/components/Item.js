import React from "react";
import { useState } from "react";

function Item({ name, category }) {

const [cartStatus, setCartStatus] = useState(false)
const [productStatus, setProductStatus] = useState(false)

function handleCart() {
  setCartStatus(!cartStatus)
  setProductStatus(!productStatus)
}

  return (
    <li className={productStatus ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartStatus ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;