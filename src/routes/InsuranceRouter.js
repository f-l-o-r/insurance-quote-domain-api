import express from "express";
import {
    getInsurance,
    createInsurance,
    getPriceByInsuranceType,
    getInsuranceProducts,
    addInsuranceProducts,
    addInsuranceOptions,
    getInsuranceOptions, test
} from "../controllers/insurance.js";
const InsuranceRouter = express.Router();
InsuranceRouter.get('/', test);
InsuranceRouter.post('/products', addInsuranceProducts);
InsuranceRouter.get('/products', getInsuranceProducts);
InsuranceRouter.post('/options', addInsuranceOptions);
InsuranceRouter.get('/options', getInsuranceOptions);
InsuranceRouter.post('/quote', createInsurance);
InsuranceRouter.get('/quote', getInsurance);
InsuranceRouter.get('/price/:optionType', getPriceByInsuranceType);
export default InsuranceRouter;