import InsuranceProducts from "../models/insuranceProducts.js";
import InsuranceQuote from "../models/insuranceQuote.js";
import express from "express";
import InsuranceOptions from "../models/insuranceOptions.js";

const router = express.Router();

export const getInsurance = async (req, res) => {
    try{
        const insuranceQuote = await InsuranceQuote.find();
        res.status(200).json(insuranceQuote);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const createInsurance = async (req, res) => {
    const insurance = req.body;
    const newInsurance = new InsuranceQuote(insurance);
    try {
       await newInsurance.save();
       res.status(201).json("Insurance was created successfully")

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

export const addInsuranceProducts = async (req, res) => {
    const products = req.body;
    const newProduct = new InsuranceProducts(products);
    try {
        await newProduct.save();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getInsuranceProducts = async (req, res) => {
    try {
        const insuranceProducts = await InsuranceProducts.find();
                
        res.status(200).json(insuranceProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addInsuranceOptions = async (req, res) => {
    const options = req.body;
    const newOptions = new InsuranceOptions(options);

    try {
        await newOptions.save();
        res.status(200).json(options);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getInsuranceOptions = async (req, res) => {
    try {
        const insuranceOption = await InsuranceOptions.find();
        res.status(200).json(insuranceOption);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPriceByInsuranceType = async (req, res) => {
    try {
        const option = await InsuranceOptions.findOne({optionType: req.params.optionType});
       res.status(201).json(option.base);

    } catch(error) {
        res.status(404).json({message: error.message});
    }
}


export default router;