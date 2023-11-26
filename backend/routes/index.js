// combine all routes into one file

const express = require("express");
const router = new express.Router();

router.use(require("./FriendManagement/friendManagement"));
router.use(require("./groupManagement/groupManagement"));
router.use(require("./ExpenseManagement/expenseManagement"));

module.exports = router;