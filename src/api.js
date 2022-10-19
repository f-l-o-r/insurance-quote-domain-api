import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import InsuranceRouter from './routes/InsuranceRouter.js';
const serverless = require("serverless-http");

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use(`/.netlify/functions/api/insurance`, InsuranceRouter);

const CONNECTION_URL='mongodb+srv://insurance-quote:insurance.pass260@fortiz.qsypbsn.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 8080;

module.exports = app;
mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
.catch((error)=>{ console.log(error.message)});
