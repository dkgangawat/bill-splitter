// expense schemaso user can add expense and share with friends and grup and see history

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    expense: [
      {
        amount: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
        owe: {
          type: Number,
          required: true,
        },
        isActive: {
          type: Boolean,
          default: true,
        },
        friends: [
          {
            amount: {
              type: Number,
              required: true,
            },
          },
        ],
        description: {
          type: String,
          required: true,
        },
        groupId: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const Expense = mongoose.model("Expense", ExpenseSchema);
module.exports = Expense;
