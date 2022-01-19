const { Schema, model } = require("mongoose")

// const ProductDetailsSchema = new Schema(
//     {
//         description : {
//             type: String,
//             required: true
//         },
//         price : {
//             type: Number
//         },
//         discount : {
//             default: 0
//         },
//         images : {
//             type: [String]
//         }
//     })

const productSchema = new Schema({
    name: {
        type: String,
        // required: true,
        // unique: true
    },
    category: { type: String },
    isActive: { type: Boolean },
    details: {
        description: {
            type: String,
        },
        price: {
            type: Number
        },
        discount: {
            default: 0
        },
        images: {
            type: [String]
        }
    }
})


// const ProductModelDetails = model("productsDetails", ProductDetailsSchema);
const ProductModel = model("products", productSchema);

module.exports = ProductModel;