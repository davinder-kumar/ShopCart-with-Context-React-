import React, { createContext, useState } from 'react'

const productContext = createContext({
    products: []
})

export const ProductProvider = (props) =>{
    const [productList, setproducts] = useState([
        {
            id: 'p1',
            title: 'Red Scarf',
            description: 'A pretty red scarf.',
            isFavorite: false
        },
        {
            id: 'p2',
            title: 'Blue T-Shirt',
            description: 'A pretty blue t-shirt.',
            isFavorite: false
        },
        {
            id: 'p3',
            title: 'Green Trousers',
            description: 'A pair of lightly green trousers.',
            isFavorite: false
        },
        {
            id: 'p4',
            title: 'Orange Hat',
            description: 'Street style! An orange hat.',
            isFavorite: false
        }
    ])

    return (
        <productContext.Provider value={{products : productList}}>
            {props.children}
        </productContext.Provider>
    )
}

export default productContext