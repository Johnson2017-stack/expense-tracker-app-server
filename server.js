import express from "express";
import cors from "cors";
import "./loadEnviroment.mjs";
import mongoose from "mongoose";
import 'dotenv/config' 
import bodyParser from "body-parser";
import Expense from "./DB/module.js"

const PORT = process.env.PORT || 4000
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json())

const dbConnection = async () => {
  await mongoose.connect(process.env.ATLAS_URI)
 
  console.log(`Connected to Database successfully!`)
}

dbConnection();


app.post("/api/create", (req,res) => {
  const expense = new Expense (
    {
      description: req.body.description,
      amount: req.body.amount,
      category: req.body.category
    }
  )
  expense.save()
  .then((result) => {
    res.status(200).send ({
      result,
    })
  })
})


app.listen(PORT, () => {
    console.log(`Server is running on port : ${PORT}`)
})
