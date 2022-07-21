const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers); //we can append it here
router.post("/login", authUser);

module.exports = router;
