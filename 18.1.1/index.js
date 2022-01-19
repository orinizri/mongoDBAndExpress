const express = require("express")
const cors = require("cors");
const {connect} = require("mongoose");
const ProductModel = require("./models/product");
const Product = require("../18.1/models/product");
const app = express();
const MONGO_URL = "mongodb://localhost:27017/myDB"

connect(MONGO_URL, {}, (err, client) => {
    if(err) return;

});

app.use(cors())
app.use(express.json());


const addProduct = async (req, res) => {
    const productBody = req.body;
    const newProduct = await new ProductModel(productBody);
    await newProduct.save()
    res.send(productBody)
}

const getAllProducts = async (req, res) => {
    const products = await ProductModel.find();
    res.send(products)
}
const getProductById = async (req, res) => {
    const { id } = req.params
    console.log(id)
    const product = await ProductModel.find({ _id : id});
    res.send(product)
}
const getActiveProducts = async (req,res) => {
    const activePruducts = await ProductModel.find({isActive : true})
    console.log("active product", activePruducts)
    res.send(activePruducts)
}
const getPrudctsAtPriceRange = async (req,res) => {
    const { min , max } = req.params
    console.log(typeof min)
    const productsInRange = await ProductModel.find({ price : {$lt : 60 ,$gt : 1} } )
    console.log("in range product", productsInRange)
    res.send(productsInRange)
}


app.post("/", addProduct);
app.get("/", getAllProducts);
app.get("/products/:id", getProductById);
app.get('/active', getActiveProducts)
app.get('/price-range/:min/:max', getPrudctsAtPriceRange)


const PORT =3000;

app.listen(PORT, () => console.log(`server is up nad runing on ${PORT}`))

