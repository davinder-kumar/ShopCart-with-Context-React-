
const configureStore = () => {
    actions = {
        TOGGLE_FAV : (curState , productId) =>{

                const prodIndex = curState.findIndex(
                    p => p.id === productId
                );
                const newFavStatus = products[prodIndex].isFavorite;
                const updatedProducts = [...products];
                updatedProducts[prodIndex] = {
                    ...products[prodIndex],
                    isFavorite: !newFavStatus
                };
                
                return updatedProducts

        }
    }
}