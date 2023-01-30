import { useEffect , useState} from "react"
import Box from "./Box"
import "./Products.css"



function Products(){
    const [Data,setdata]=useState([])


    useEffect(()=>{
        fetch("https://purplebackend.onrender.com/products/shampoo").then((r)=>r.json()).then((r)=>setdata(r))
    },[])


    return(
        <div>
            <div className="menubox">
            <select className='menu'>
                <option value>Price Range</option>
                <option value='res'>100 below</option>
                <option value='asc'>Rs. 100 - Rs. 200</option>
                <option value='desc'>Rs. 200 - Rs. 500</option>
                <option value='desc'>Rs. 500 - Rs. 1000</option>
            </select>
            <select className='menu' style={{marginLeft:"10px"}}>
                <option value>Sort By</option>
                <option value='asc'>Ascending</option>
                <option value='desc'>Descending</option>
            </select>
            </div>
            <div className="ProductsBox"> 
                {Data.map((item)=><Box item={item}></Box>)}
            </div>
        </div>
    )
}

export default Products