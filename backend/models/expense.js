// expense schemaso user can add expense and share with friends and grup and see history

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
    },
    expense: [
        {
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        friends: [
            {
            email: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true,
            },
            },
        ],
        },
    ],
    });

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;
