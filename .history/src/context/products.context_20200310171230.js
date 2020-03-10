import React, { createContext, useState } from 'react'

const productContext = createContext({
    products: [],
    toggleFav : () =>{}
})

export const ProductProvider = (props) => {
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


    const toggleFavProduct = (productId) => {
        setproducts(products => {
            const prodIndex = products.findIndex(
                p => p.id === productId
            );
            
            console.log(products[prodIndex])
            const newFavStatus = products[prodIndex].isFavorite;
            // cos
            const updatedProducts = [...products];
            updatedProducts[prodIndex] = {
                ...products[prodIndex],
                isFavorite: !newFavStatus
            };
            
            return updatedProducts
        })
    }
    return (
        <productContext.Provider value={{ products: productList, toggleFav:toggleFavProduct }}>
            {props.children}
        </productContext.Provider>
    )
}



export default productContext