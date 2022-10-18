import mongoose from "mongoose";
const  Details = {
        description: String,
        price: String
}
const  Coverage = {
        tittle: String,
        coverageType: String,
        details : [Details]
}
const InsuranceOptionSchema = mongoose.Schema({
        tittle: String,
        optionType: String,
        coverPercentage: Number,
        base: Number,
        coverage: [Coverage]
})

const InsuranceOption = mongoose.model('InsuranceOption', InsuranceOptionSchema );

export default  InsuranceOption;