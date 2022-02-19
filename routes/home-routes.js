// the route for the home page
// import required modules
const express = require("express");
const { homeview } = require("../controllers/homeController");

const router = express.Router();

router.get("/", homeview);

module.exports = { routes: router };
