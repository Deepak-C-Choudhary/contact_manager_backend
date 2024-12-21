const express = require("express");
const mongoose = require("mongoose");
const contactRoutes = require("./routes/contacts");
const db = require("./config/db");

const app = express();
const PORT = 5000;

db();

app.use(express.json());
app.use("/api/contacts", contactRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
