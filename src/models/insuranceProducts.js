import mongoose from "mongoose";

const InsuranceProductsSchema = mongoose.Schema({
    tittle: String,
    type: String,
    url: String,
    status: String,
    image: String,
    description:String

})

const InsuranceProducts = mongoose.model('InsuranceProducts', InsuranceProductsSchema );

export default  InsuranceProducts;