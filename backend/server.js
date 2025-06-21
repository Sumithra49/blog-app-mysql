
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectionToDb, sequelize } = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
app.use(cors());
app.use(express.json());
sequelize.sync({ alter: true })
  .then(() => {
    console.log(" Tables synced with Clever Cloud DB");
  })
  .catch((err) => {
    console.error(" Sync failed:", err);
  });

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  await connectionToDb();
  console.log(`🚀 Server running on http://localhost:${port}`);
});
