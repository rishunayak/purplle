import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteAllCart, getCart } from "../../Redux/Cart/action"
import { postOrder } from "../../Redux/Order/action"
import {Button} from "@chakra-ui/react"


const PayButton=()=>
{
    const dispatch=useDispatch()
  const {isLoading,isError,cart,id}=useSelector((store)=>store.CartReducer)
   const nav=useNavigate()
  useEffect(()=>
  {
        dispatch(getCart())
  },[])

    const handlePay=()=>
    {
    if(!isLoading)
    {
      dispatch(postOrder(cart))
      dispatch(deleteAllCart(id))
      nav("/")
    }
    }

    return <Button onClick={handlePay}>Pay</Button>
}

export default PayButton