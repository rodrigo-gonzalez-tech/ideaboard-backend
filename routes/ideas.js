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

router.put("/:id", updateIdea);

router.delete("/:id", deleteIdea);

module.exports = router;
