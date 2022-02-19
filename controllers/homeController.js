// set controller to access the system files, pdf creation, and rendering of home page

// import required modules
const fs = require("fs");
const pdf = require("pdf-creator-node");
const path = require("path");
const options = require("../helpers/options");
const data = require("../helpers/data");

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
  const fileName = "inv_" + Math.trunc(Math.random() * 1000000) + ".pdf";
  // make an array of products
  let arr = [];
  // loop through the products and push them to the array
  data.forEach((item) => {
    const productName = {
      // set the product name
      name: item.name,
      // set the product description
      description: item.description,
      // set the product unit
      unit: item.unit,
      // set the product quantity
      quantity: item.quantity,
      // set the product price
      price: item.price,
      // set the product image
      img: item.img,
      // set the product total
      total: item.quantity * item.price,
    };
    arr.push(productName);
  });

  // set the sum of the products
  let subTotal = 0;
  arr.forEach((product) => {
    subTotal += product.total;
  });

  // set the tax
  let tax = (subTotal * 15) / 100;

  // set the net total
  let netTotal = subTotal - tax;

  // set object to be passed to the template
  const obj = {
    // set the products array
    productsList: arr,
    // set the sub total
    subTotal: subTotal,
    // set the tax
    tax: tax,
    // set the net total
    nTotal: netTotal,
  };
  // locate the template
  const document = {
    html: html,
    data: {
      products: obj,
    },
    // path: path.join(__dirname, "../docs", fileName),
    path: "./docs/" + fileName,
  };
  // create the pdf
  pdf
    .create(document, options)
    .then((res) => {
      console.log(res);
      // // set the file name
      // res.setHeader("Content-disposition", `attachment; filename=${fileName}`);
      // // set the content type
      // res.setHeader("Content-type", "application/pdf");
      // // send the file
      // res.send(res.toBuffer());
    })
    .catch((err) => {
      console.log(err);
    });

  // set the file path
  // const filePath = path.join(__dirname, "../docs", fileName);
  const filePath = "http://localhost:3030/docs/" + fileName;

  // render the download page
  res.render("download", {
    path: filePath,
  });
};

module.exports = { homeview, getPDF };
