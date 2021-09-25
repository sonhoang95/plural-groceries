import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"
import { productsInfo } from "./data"
import ScrollToTop from "./ScrollToTop"

function App() {
  const [cart, setCart] = useState(() => {
    const savedProducts = JSON.parse(localStorage.getItem("cart"))
    if (savedProducts === null) {
      return []
    } else {
      return savedProducts
    }
  })

  // store cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  function handleProductAdd(newProduct) {
    const existingProduct = cart.find(product => product.id === newProduct.id)
    if (existingProduct) {
      const updatedCart = cart.map(product => {
        if (product.id === newProduct.id) {
          return { ...newProduct, quantity: product.quantity + 1 }
        } else {
          return product
        }
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...newProduct, quantity: 1 }])
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter(product => product.id !== id)
    setCart(updatedCart)
  }
  return (
    <Router>
      <ScrollToTop />
      <Navbar cart={cart} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products
            cart={cart}
            onProductAdd={handleProductAdd}
            onProductDelete={handleProductDelete}
          />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails
            products={productsInfo}
            onProductAdd={handleProductAdd}
          />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
