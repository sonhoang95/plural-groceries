import React from "react"
import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import ProductDetailInfo from "../components/ProductDetailInfo"
import ProductDetailNutrition from "../components/ProductDetailNutrition"
import ProductDetailStorage from "../components/ProductDetailStorage"
import Button from "../components/Button"

export default function ProductDetails({ products, onProductAdd }) {
  const { id } = useParams()

  const product = products.find(product => product.id.toString() === id)

  return product ? (
    <div className="product-details-layout">
      <div className="details-image-container">
        <img
          src={product.image}
          width="450"
          height="450"
          className="product-details-image"
          alt={product.name}
        />
        <Button onClick={() => onProductAdd(product)}>Add to cart</Button>
      </div>
      <div>
        <div className="tabs">
          <ProductDetailInfo
            className="product-info"
            product={product}
            onProductAdd={onProductAdd}
          />
          <ProductDetailNutrition nutrition={product.nutrition} />
          <ProductDetailStorage storage={product.storage} />
        </div>
      </div>
    </div>
  ) : (
    <div>Error: Product doesn't exist</div>
  )
}
