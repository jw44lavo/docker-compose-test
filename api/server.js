const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  host: "db",
  user: "postgres",
  password: "postgres",
  database: "postgres",
  port: 5432,
});

// API endpoint
app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
