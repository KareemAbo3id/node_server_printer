// set controller to access the system files, pdf creation, and rendering of home page

// import required modules
const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");

// set homeview meddleware
const homeview = (req, res, next) => {
  res.render("home");
};

// set getPDF meddleware
const getPDF = async (req, res, next) => {
  const html = fs.readFileSync(
    path.join(__dirname, "../views/template.html"),
    "utf8"
  );
  const fileName = `inv_${Math.trunc(Math.random() * 1000000)}.pdf`;
};

module.exports = { homeview };
