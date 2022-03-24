const mongoose = require('mongoose');

const main = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name:String,
        price:Number
    });
    const saveInDB = async () => {
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"i phone 10",price:600});
    const result = await data.save();
    console.log(result)
}
saveInDB()