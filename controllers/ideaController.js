const Idea = require("../models/Idea");

// Get all ideas
async function getIdeas(req, res) {
  try {
    const ideas = await Idea.find().sort({ date: -1 });
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
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Post an idea
async function createIdea(req, res) {
  const idea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await idea.save();
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Update an idea
async function updateIdea(req, res) {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      {
        new: true,
      },
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong." });
  }
}

// Delete an idea
async function deleteIdea(req, res) {
  try {
    await Idea.findByIdAndDelete(req.params.id);
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
