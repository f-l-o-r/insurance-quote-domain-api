import mongoose from "mongoose";

const Vehicle = {
    vehicleType: String,
    brand: String,
    model: String,
    year: String,
    cost: Number,
    state: String
};

const InsuranceOption = {
    optionType: String,
    tittle: String,
    coverPercentage: Number,
    quotePerMonth: Number,
    base: String
};

const InsuranceQuoteSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    birthday: String,
    vehicle: [Vehicle],
    hasAccident: String,
    address: String,
    gender: String,
    maritalStatus: String,
    insuranceOption: InsuranceOption
});
const InsuranceQuote = mongoose.model('InsuranceQuote', InsuranceQuoteSchema );

export default  InsuranceQuote;