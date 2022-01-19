const express = require("express")
const cors = require("cors");
const {connect} = require("mongoose");
const ProductModel = require("./models/product");
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

app.post("/", addProduct);
app.get("/", getAllProducts);
app.get("/:id", getProductById);

const PORT =3000;

app.listen(PORT, () => console.log(`server is up nad runing on ${PORT}`))

