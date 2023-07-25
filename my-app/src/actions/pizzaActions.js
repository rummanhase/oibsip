import axios from "axios";

export const getAllPizzas = () =>async dispatch => {
    dispatch({type : 'GET_PIZZA_REQUEST'})
    try{
        const res =await axios.get('/api/pizza/getPizzas');
        dispatch({type : 'GET_PIZZA_SUCCESS' , payload : res.data})
    }catch(error){
        dispatch({type : 'GET_PIZZA_FAIL' , payload : error})
    }
}