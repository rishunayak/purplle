import { useState } from "react"
import { useEffect } from "react"
import Box from "./Box"
import "./Products.css"



function Products(){
    const [Data,setdata]=useState([])
    useEffect(()=>{
        fetch("https://purplebackend.onrender.com/products/shampoo").then((r)=>r.json()).then((r)=>setdata(r))
    },[])
    return(<div className="ProductsBox" style={{paddingLeft:"10%",paddingRight:"10%",border:"2px solid red"}}> 
        {Data.map((item)=><Box item={item}></Box>)}
    </div>)
}

export default Products