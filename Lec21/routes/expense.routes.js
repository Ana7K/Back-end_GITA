const express = require("express");
const Expense = require("../models/expense.model");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// add expense
router.post("/", authMiddleware, async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user.id,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get user expenses
router.get("/", authMiddleware, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id });
    res.json(expenses);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
