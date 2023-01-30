import "./Box.css"

function Box({item}){
    console.log(item)
    return(<div className="item">
        <div><img width={"200px"} height={"200px"} src={item.image} /></div>
        <div className="cartbutton"><button>ADD TO CART</button></div>
        <div>fdhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
        <div>255</div>
        <div></div>
    </div>)
}

export default Box