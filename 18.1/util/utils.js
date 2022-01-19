const Product = require("../models/product");

const getAllProducts = () => {
    return Product.find({});
}
module.exports = { getAllProducts }