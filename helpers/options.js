// Invioce Document layout

module.exports = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
  header: {
    height: "30mm",
    contents: `<h4 style="color: #000; font-size:20px; font-weight:800; text-align:center;">INVOICE HEADER TITLE</h4>`,
  },
  footer: {
    height: "20mm",
    contents: `<h6 style="color: #000; font-size:15px; font-weight:400; text-align:center;">INVOICE FOOTER DESCRIPTION</h6>`,
  },
};
