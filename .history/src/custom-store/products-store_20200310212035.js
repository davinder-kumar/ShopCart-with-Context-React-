import {initStore} from './store'
const configureStore = () => {
    actions = {
        TOGGLE_FAV: (curState, productId) => {

            const prodIndex = curState.findIndex(
                p => p.id === productId
            );
            const newFavStatus = curState[prodIndex].isFavorite;
            const updatedProducts = [...curState];
            updatedProducts[prodIndex] = {
                ...curState[prodIndex],
                isFavorite: !newFavStatus
            };

            return { products: updatedProducts }

        }
    }

}

