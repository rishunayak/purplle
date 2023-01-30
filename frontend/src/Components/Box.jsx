import "./Box.css"

function Box({item}){
    
    return(
    <div className="item">

        <div>
            <img className="img" src={item.image} alt="image" />
        </div>

        <div className="cartbutton">
            <button>ADD TO CART</button>
        </div>

        <div className="Productsname">{item.product_name}</div>

        <div className="pricerating">
            <div>
                <b>₹ {item.d_price}</b>
            </div>
            <div className="price">{item.price}</div>
            <div className="offer">{item.offer}</div>
        </div>

        <div className="pricerating">
            <div className="rating">{item.rating}⭐️</div>
            <div className="ratingcount">{item.rating_count}</div>
        </div>
        
        <div></div>
    </div>
    )
}

export default Box