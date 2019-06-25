const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  res.json({
    message: "Poset message for uers works"
  });
});

module.exports = router;
