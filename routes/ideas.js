const express = require("express");

const router = express.Router();

const ideas = [
  {
    id: 1,
    text: "Create a mobile app that helps people find quiet places to study or work based on real-time noise levels.",
    tag: "Technology",
    username: "JohnWick",
    date: "2026-05-01",
  },
  {
    id: 2,
    text: "Start a community garden where neighbors can grow vegetables together and donate surplus food to local shelters.",
    tag: "Community",
    username: "ForrestGump",
    date: "2026-05-01",
  },
  {
    id: 3,
    text: "Design a website that generates personalized workout plans based on the equipment you have at home.",
    tag: "Fitness",
    username: "EllenRipley",
    date: "2026-05-01",
  },
  {
    id: 4,
    text: "Build a browser extension that replaces negative news headlines with a daily inspirational quote until you're ready to read them.",
    tag: "Productivity",
    username: "MartyMcFly",
    date: "2026-05-01",
  },
  {
    id: 5,
    text: "Launch a monthly book exchange where participants leave handwritten notes explaining why they loved each book.",
    tag: "Books",
    username: "IndianaJones",
    date: "2026-05-01",
  },
];

// Get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

// Get specific idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "Requested resource could not be found.",
    });
  }

  res.json({ success: true, data: idea });
});

// Post an idea
router.post("/", (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ success: true, data: idea });
});

// Update an idea
router.put("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "Requested resource could not be found.",
    });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

// Delete an idea
router.delete("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: "Requested resource could not be found.",
    });
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1);

  res.json({ success: true, data: {} });
});

module.exports = router;
