const express = require("express");
const router = new express.Router();
const Friends = require("../../models/FriendsSchema");
const Expense = require("../../models/expense");

//route to add expense which paid by logined user by group id amout and description

router.post("/addExpense", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const { amount, description, FriendIds, groupId } = req.body;
    const totalFriends = FriendIds.length;
    const eachPersonOwe = amount / totalFriends;
    const expense = new Expense({
      user: loggedInUser._id,
      expense: [
        {
          amount,
          owe: 0,
          friends: FriendIds.map((friendId) => ({
            _id: friendId,
            amount: eachPersonOwe,
          })),
          description,
          groupId,
        },
      ],
    });
    const createdExpense = await expense.save();
    res.status(201).json({
      message: "expense created successful",
      success: true,
      expense: createdExpense,
    });
  } catch (error) {
    console.error("Error creating expense", error);
    res.status(500).json({ success: false, error: "Failed to create expense" });
  }
});

// route to add expense which paid by friend

router.post("/addExpenseByFriend", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const { amount, description, FriendIds, paidBy, groupId } = req.body;
    const totalFriends = FriendIds.length;
    const eachPersonOwe = amount / totalFriends;
    const expense = new Expense({
      user: loggedInUser._id,
      expense: [
        {
          amount,
          owe: eachPersonOwe,
          friends: FriendIds.map((friendId) => ({
            _id: friendId,
            amount: friendId === paidBy ? 0 : eachPersonOwe,
          })),
          description,
          groupId,
        },
      ],
    });
    const createdExpense = await expense.save();
    res.status(201).json({
      message: "expense created successful",
      success: true,
      expense: createdExpense,
    });
  } catch (error) {
    console.error("Error creating expense", error);
    res.status(500).json({ success: false, error: "Failed to create expense" });
  }
});

// get total owe of logined user

router.get("/getTotalOwe", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const expense = await Expense.findOne({ user: loggedInUser._id });
    const totalOwe = expense.expense.reduce((acc, curr) => {
      return acc + curr.owe;
    }, 0);
    res.status(200).json({
      message: "get total owe successful",
      success: true,
      totalOwe: totalOwe,
    });
  } catch (error) {
    console.error("Error getting total owe", error);
    res.status(500).json({ success: false, error: "Failed to get total owe" });
  }
});

// route to get all expenses in a group

router.get("/getExpenses", async (req, res) => {
  try {
    const loggedInUser = req.loggedInUser;
    const { groupId } = req.query;
    const expense = await Expense.findOne({ user: loggedInUser._id });
    const expenses = expense.expense.filter(
      (expense) => expense.groupId === groupId
    );
    res.status(200).json({
      message: "get expenses successful",
      success: true,
      expenses: expenses,
    });
  } catch (error) {
    console.error("Error getting expenses", error);
    res.status(500).json({ success: false, error: "Failed to get expenses" });
  }
});

module.exports = router;
