import React, { useState, useEffect } from "react"
import Product from "./Product"
import { productsInfo } from "../data"
import Loader from "../components/Loader"
import "./Products.css"

export default function Products(props) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setProducts(productsInfo)
    setLoading(false)
  }, [])

  return (
    <div className="products-layout">
      <h1>Fresher Than Fresh Picks</h1>
      <p className="accent-text">Hand-picked fresh, for delivery.</p>
      <div className="products-grid">
        {loading && <Loader />}
        {products.map(product => {
          return (
            <Product
              cart={props.cart}
              key={product.id}
              details={product}
              onProductAdd={props.onProductAdd}
              onProductDelete={props.onProductDelete}
            ></Product>
          )
        })}
      </div>
    </div>
  )
}
