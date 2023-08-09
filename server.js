require("dotenv").config();
require("./DB/database.js").connect();
const express = require('express');
const router = require("./routes/expense.js");
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())

app.use("/api", router);

app.use(cors());


app.use("/expense", expenses)

app.get("/", (req, res) => {
    res.send({ message: "Hello, nodemon, learning with educative!" });
  });

app.listen(PORT, () => {
    console.log('database connnected')
    console.log(`Server is running on port : ${PORT}`)
})