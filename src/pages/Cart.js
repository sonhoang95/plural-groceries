import React, { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { loadStripe } from "@stripe/stripe-js"
import "./Cart.css"

const stripeAccessKey =
  "pk_test_51JYsPXJ9mAPhFO3sxyNRbkOaMJ2jXcRHOmG9qlxuQr5LhCA8T8lcBxJnipRzmOikll4bhc63CoMKEDdjnUcaLxHP00SoKs99kl"

export default function Cart({ cart }) {
  const [email, setEmail] = useState("")

  const stripePromise = loadStripe(`${stripeAccessKey}`)

  function handleFormSubmit(e) {
    e.preventDefault()

    const lineItems = cart.map(product => {
      return { price: product.price_id, quantity: product.quantity }
    })
    stripePromise.then(stripe => {
      stripe
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          customerEmail: email,
          successUrl: "https://plural-groceries.netlify.app",
          cancelUrl: "https://plural-groceries.netlify.app",
        })
        .then(response => {
          // this will only log if the redirect did not work
          console.log(response.error)
        })
        .catch(error => {
          // wrong API key? you will see the error message here
          console.log(error)
        })
    })
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  const totalPrice = cart.reduce((total, product) => {
    return (total += product.quantity * product.price)
  }, 0)
  return (
    <div className="cart-layout">
      <div>
        {cart.length === 0 && (
          <div className="empty-cart">
            <h1>Your Cart</h1>
            <p>You have not added any product to your cart yet.</p>
          </div>
        )}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quantity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(product => (
                  <tr>
                    <td>
                      <img src={product.image} width="30" height="30" alt="" />
                      {product.name}
                    </td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <strong>${product.price * product.quantity}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <h1>Even More Shipped to Your Door</h1>
              <p></p>
              <p>
                Enter your email below to get FREE** same day shipping and 15%
                OFF your first order!
              </p>
              <Input
                value={email}
                onChange={handleEmailChange}
                autocomplete="email"
                placeholder="Email"
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
