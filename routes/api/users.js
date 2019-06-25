const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/test", (req, res) => {
  res.json({
    message: "Test message for uers works"
  });
});

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({
        email: "Email already exists"
      });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar
      });
    }
  });
});

module.exports = router;
