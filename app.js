const express = require("express");
const mongoose = require("mongoose");
const oRouter = require("./routes/RoutesO");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/items", oRouter);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://rizzly:MY6mDM9Q7FyRdLaD@cluster0.7xohn0d.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

module.exports = app;
