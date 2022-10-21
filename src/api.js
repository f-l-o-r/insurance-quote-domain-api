import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import InsuranceRouter from './routes/InsuranceRouter.js';

const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use(`/insurance`, InsuranceRouter);

const CONNECTION_URL='http://localhost:27017';

const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL)
.then(()=> app.listen(PORT, () => console.log(`server is running on port: ${PORT}`)))
.catch((error)=>{ console.log(error.message)});
