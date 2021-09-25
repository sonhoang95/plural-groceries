import React from "react"

export default function ProductDetailInfo({ product, onProductAdd }) {
  return (
    <>
      <p>
        {product.description} of {product.name} sold at{" "}
        <strong>${product.price}</strong> per piece.
      </p>
    </>
  )
}
