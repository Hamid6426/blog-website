const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const errorMiddleware = require("./middlewares/errorMiddleware");

// Import routes
const adminRoutes = require("./routes/adminRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const collaboratorRoutes = require("./routes/collaboratorRoutes");
const commentRoutes = require("./routes/commentRoutes");
const folderRoutes = require("./routes/folderRoutes");
const likeRoutes = require("./routes/likeRoutes");
const postRoutes = require("./routes/postRoutes");
const profileRoutes = require("./routes/profileRoutes");
const reportRoutes = require("./routes/reportRoutes");
const settingsRoutes = require("./routes/settingsRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const tagRoutes = require("./routes/tagRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// API Routes
app.use("/api/admins", adminRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/collaborators", collaboratorRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/folders", folderRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/tags", tagRoutes);
app.use("/api/users", userRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the Blog API!");
});

// Error Handling Middleware
app.use(errorMiddleware);

module.exports = app;
