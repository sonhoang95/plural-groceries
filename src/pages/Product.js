import React from "react"
import Button from "../components/Button"
import { Link } from "react-router-dom"
import "./Product.css"

export default function Product({
  details,
  onProductAdd,
  onProductDelete,
  cart,
}) {
  const productFromCart = cart.find(product => product.id === details.id)
  const quantity = productFromCart ? productFromCart.quantity : 0

  return (
    <div className="product">
      <div className="product-image-container">
        <Link to={`/products/${details.id}`}>
          <img
            style={{ cursor: "pointer" }}
            src={details.image}
            width="130"
            height="130"
            className="product-image"
            alt={details.name}
          />
        </Link>

        <div className="product-quantity-container">
          {quantity > 0 && <div className="product-quantity">{quantity}</div>}
        </div>
      </div>
      <div className="product-info">
        <h3>{details.name}</h3>
        <p>{details.upc}</p>
      </div>
      <div className="product-checkout">
        <div>
          {quantity > 0 && (
            <button
              onClick={() => onProductDelete(details.id)}
              outline
              className="product-delete"
            >
              x
            </button>
          )}
        </div>
        <Button onClick={() => onProductAdd(details)} outline>
          ${details.price}
        </Button>
      </div>
    </div>
  )
}
