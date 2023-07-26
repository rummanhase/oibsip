export const registerUser = (user) =>async dispatch => {
    dispatch({type : "USER_REGISTER_REQUEST"})
    try{
        const res = await axios.post('/api/user/register' , user)
        dispatch({type : 'USER_REGISTER_SUCCESS'})
    }catch (err){
        dispatch({type : 'USER_REGISTER_FAIL' , payload:err})
    }
}