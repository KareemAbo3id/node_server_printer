// the route for the home page
// import required modules
const express = require("express");
const { homeview, getPDF } = require("../controllers/homeController");

const router = express.Router();

// get the home page view
router.get("/", homeview);
// get the download pdf page
router.get("/download", getPDF);

module.exports = { routes: router };
