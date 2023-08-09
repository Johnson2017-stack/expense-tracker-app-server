import express from "express"
import cors from "cors"
import "./loadEnviroment.mjs"
import expenses from "./routes/expenses.js"


const app = express()
const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json())

app.use("/expense", expenses)

app.get("/", (req, res) => {
    res.send({ message: "Hello, nodemon, learning with educative!" });
  });

app.listen(PORT, () => {
    console.log('database connnected')
    console.log(`Server is running on port : ${PORT}`)
})