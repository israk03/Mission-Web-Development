/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
import Product from "../Product/Product"
export default function Products({info}) {
  return (
    <div>
        <h2>Hello from Products.</h2>
        <Product info={info}></Product>
    </div>
  )
}
