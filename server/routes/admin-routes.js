const express = require("express");
const {
  acceptCampaign,
  getUsers,
  deleteUser,
  deleteCampaign,
} = require("../controllers/adminController");
const router = express.Router();

router.get("/acceptcampaign/:id", acceptCampaign);
router.get("/allusers", getUsers);
router.delete("/deleteuser/:id", deleteUser);
router.delete("/deleteCampaign/:id", deleteCampaign);
module.exports = router;
