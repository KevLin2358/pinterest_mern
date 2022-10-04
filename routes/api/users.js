const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));
router.get("/123", (req, res) => res.json({ msg: "This is the users 123" }));

module.exports = router;