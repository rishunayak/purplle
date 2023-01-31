import "./Navbar1.css"

function Navbar1(){
    return(<div className="navbar1">
        <div style={{display:"flex",gap:"10px",justifyItems:"center",alignItems:"center",marginLeft:"10%",letterSpacing:" initial"}}>
            <div>
                <img width={"35px"} src="https://media6.ppl-media.com/mediafiles/ecomm/home/1543587824_logo.png" alt="img" />
            </div>
            <div>
                <p>⭐️⭐️ FLAT Rs. 100 OFF on your first order! ⭐️⭐️</p>
            </div>
            <div className="appfirst">
                Use Code:APPFIRST
            </div>
        </div>
        <div className="downloadapp">
            <button>DOWMLOAD APP</button>
        </div>
    </div>)
}

export default Navbar1