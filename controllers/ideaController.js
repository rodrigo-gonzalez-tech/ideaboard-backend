const Idea = require("../models/Idea");

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

module.exports = {
  getIdeas,
};
