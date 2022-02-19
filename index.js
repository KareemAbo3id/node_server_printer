// import required modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const PORT = 3030;

// import required routes
const homeRoutes = require("./routes/home-routes");

// initialize express
const app = express();

// set view engine
app.use(expressLayouts);
app.set("view engine", "ejs");

// set static folder and routes
app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.routes);

// listen to port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
