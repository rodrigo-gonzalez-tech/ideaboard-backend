const express = require("express");

const PORT = 5000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Idea Board API." });
});

const ideasRouter = require("./routes/ideas.js");
app.use("/api/ideas", ideasRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
