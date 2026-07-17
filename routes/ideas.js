const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  getIdeas,
  getIdea,
  createIdea,
  updateIdea,
  deleteIdea,
} = require("../controllers/ideaController");

const router = express.Router();

router.get("/", getIdeas);

router.get("/:id", getIdea);

router.post("/", protect, createIdea);

router.patch("/:id", protect, updateIdea);

router.delete("/:id", protect, deleteIdea);

module.exports = router;
