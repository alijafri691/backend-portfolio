const express = require("express");
const portfolioController = require("../controller/portfolioController");

const router = express.Router();

router.get("/aboutme", portfolioController.getAboutMe);
router.get("/skill", portfolioController.getSkills);
router.get("/hobbies", portfolioController.getHobbies);
router.get("/academic", portfolioController.getAcademicBg);

module.exports = router;
