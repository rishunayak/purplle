export const getAllUser=()=>dispatch=>
{
   dispatch({type:GET_USER_REQUEST})
   return axios.get("https://purplebackend.onrender.com/users/all").then(r=>dispatch({type:GET_USER_SUCCESS,payload:r.data}))
   .catch(e=>dispatch({type:GET_USER_FAILURE}))
}