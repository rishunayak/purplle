

function Navbar1(){
    return(<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",position:"fixed" , width:"100%" ,top:"0",right:"0", zIndex:"1000",padding:"10px",backgroundColor:"#f9d3e8"}}>
        <div style={{display:"flex",gap:"10px",justifyItems:"center",alignItems:"center",marginLeft:"10%",letterSpacing:" initial"}}>
            <div>
                <img width={"35px"} src="https://media6.ppl-media.com/mediafiles/ecomm/home/1543587824_logo.png" alt="img" />
            </div>
            <div>
                <p>⭐️⭐️ FLAT Rs. 100 OFF on your first order! ⭐️⭐️</p>
            </div>
            <div style={{border:"3px dashed #ff147b",padding:"7px",backgroundColor:"white"}}>
                Use Code:APPFIRST
            </div>
        </div>
        <div style={{padding:"12px",fontFamily:"AqleemaNewM",borderRadius:"5px",fontSize:"14px",fontWeight:"bold",backgroundColor:"#ff147b",color:"white",letterSpacing:" initial",marginRight:"10%"}}>
            <button>DOWMLOAD APP</button>
        </div>
    </div>)
}

export default Navbar1