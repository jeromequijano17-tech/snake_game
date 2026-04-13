const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // your MySQL password
  database: "simpledb"
});

db.connect(err => {
  if (err) {
    console.log("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Home page (form + data)
app.get("/", (req, res) => {
  res.send("Hello! Your Node.js app is running");
});

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
