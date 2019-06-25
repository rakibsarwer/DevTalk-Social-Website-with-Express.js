const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const post = require("./routes/api/post");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const db = require("./config/key").mongoURL;

mongoose
  .connect(db)
  .then(data => {
    console.log(`DB Connection Established ${data}`);
  })
  .catch(err => {
    console.log(`DB Connection Error ${err}`);
  });

const PORT = process.env.PORT || 2000;

app.get("/", (req, res) => {
  res.send("Hello Developers");
});

app.use("/api/user", users);
app.use("/api/profile", profile);
app.use("/api/post", post);

app.listen(PORT, () => {
  console.log(`Server is connected on PORT: ${PORT}`);
});
