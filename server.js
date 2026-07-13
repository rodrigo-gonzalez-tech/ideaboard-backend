const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db.js");
const cors = require("cors");
const ideasRouter = require("./routes/ideas.js");

const port = process.env.PORT || 5000;

// Database connection
connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Idea Board API." });
});

// Ideas router
app.use("/api/ideas", ideasRouter);

app.listen(port, () => console.log(`Listening on port ${port}.`));
