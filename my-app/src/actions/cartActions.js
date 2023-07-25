export const addToCart = ( pizza , varient , quant) => dispatch => {
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
        dispatch({type : "REMOVE_FROM_CART" , payload:pizza})
    }else{
        dispatch({type : "ADD_TO_CART" , payload:cartItem})
    }
    
}

export const deleteFromCart = (pizza) => dispatch => {
    dispatch({type : "REMOVE_FROM_CART" , payload:pizza})
}