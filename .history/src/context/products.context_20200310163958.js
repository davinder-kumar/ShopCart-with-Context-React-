import React, { createContext, useState } from 'react'

const productContext = createContext({
    products: []
})

export const ProductProvider = () =>{
    const [products, setproducts] = useState()
}