const express = require('express')
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/product')
const { getAllProducts } = require('./util/utils')

mongoose.connect("mongodb://localhost:27017/products")

// router.get("/products", async (req, res) => {
//     try {
//         res.status(200).send(await getAllProducts());
//     } catch (e) {
//         res.status(400).send({ error: e.message });
//     }
// });

// router.post('/products', async (req, res) => {
//     try {
//         // const {product} = req.body;
//         // console.log(product);
//         // const newProduct = await new Product(product);

//         // await newProduct.save();
//         // const procusts = await Product.find();
//         res.send("procusts");

//     } catch (e) {
//         res.send(e)
//     }
// })

const addProduct = async (req, res) => {
    try{

        const {product} = req.body;
        const newProduct = await new Product(product);
        await newProduct.save();
        res.send(newProduct)

    }catch(error){
        res.send(error)
    }
}

app.post("/products", addProduct)

const PORT = 3000;
const host = 'localhost';


// app.use('/', router)
app.listen(PORT, () => {
    console.log(`Listening on port: http://${host}:${PORT}`)
})

