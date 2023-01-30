const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    image:String,
    product_name:String,
    d_price:String,
    price:String,
    offer:String,
    rating:String,
    rating_count:String,
    size:String,
    category:String
})

const Product=mongoose.model("products",productSchema)

module.exports=Product;