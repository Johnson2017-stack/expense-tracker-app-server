import { Schema, model } from "mongoose";

const expensesSchema = new Schema({
    description: {
        type: String,
        required: [true, "Please add your description"],
    },
    amount: {
        type: String,
        required: [true, "Please the amount"],
    },
    category: {
        type: String,
        required: [true, "What category would you like to use?"],
    }
})

const Expense = model("expense", expensesSchema)

export default Expense;