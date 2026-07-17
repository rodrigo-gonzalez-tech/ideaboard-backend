const mongoose = require("mongoose");
const Idea = require("../models/Idea");

// Get all ideas
async function getIdeas(req, res) {
  try {
    const ideas = await Idea.find().sort({ createdAt: -1 });
    console.log(ideas.length);

    res.json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Get specific idea
async function getIdea(req, res) {
  try {
    // Check id format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid idea ID." });
    }

    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({ success: false, error: "Idea not found." });
    }

    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Create an idea
async function createIdea(req, res) {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.user.username,
    user: req.user._id,
  });

  try {
    const savedIdea = await idea.save();

    res.status(201).json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Update an idea
async function updateIdea(req, res) {
  try {
    // Check id format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid idea ID." });
    }

    // Find idea
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({ success: false, error: "Idea not found." });
    }

    // Validate ownership
    if (!idea.user.equals(req.user._id)) {
      return res.status(403).json({
        success: false,
        error: "You are not allowed to modify this idea.",
      });
    }

    // Edit and save idea
    if (req.body.text !== undefined) {
      idea.text = req.body.text;
    }

    if (req.body.tag !== undefined) {
      idea.tag = req.body.tag;
    }

    await idea.save();

    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Delete an idea
async function deleteIdea(req, res) {
  try {
    // Check id format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid idea ID." });
    }

    // Find idea
    const idea = await Idea.findById(req.params.id);

    if (!idea) {
      return res.status(404).json({ success: false, error: "Idea not found." });
    }

    // Validate ownership
    if (!idea.user.equals(req.user._id)) {
      return res.status(403).json({
        success: false,
        error: "You are not allowed to delete this idea.",
      });
    }

    // Delete idea
    await idea.deleteOne();

    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

module.exports = {
  getIdeas,
  getIdea,
  createIdea,
  updateIdea,
  deleteIdea,
};
