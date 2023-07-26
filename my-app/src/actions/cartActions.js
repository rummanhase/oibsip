export const addToCart = ( pizza , varient , quant) => (dispatch , getState) => {
    var cartItem = {
        name : pizza.name,
        _id : pizza._id,
        image : pizza.image,
        varient : varient ,
        quantity : Number(quant),
        prices : pizza.prices,
        price : pizza.prices[0][varient] * quant
    };
    if(cartItem.quantity < 1 ){
        dispatch({type : "REMOVE_FROM_CART" , payload:pizza});
        localStorage.setItem("cartItems" , JSON.stringify(getState().cartReducer.cartItems))
    }else{
        dispatch({type : "ADD_TO_CART" , payload:cartItem});
        localStorage.setItem("cartItems" , JSON.stringify(getState().cartReducer.cartItems))
    }
    
}

export const deleteFromCart = (pizza) => (dispatch , getState) => {
    dispatch({type : "REMOVE_FROM_CART" , payload:pizza});
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
} 