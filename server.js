const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

const pages = [
  "project.html",
  "about.html",
  "services.html",
  "contact.html",
  "buynow.html",
  "details.html",
  "forgot.html",
  "login.html",
  "signin.html"
];

pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, "public", page));
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
  console.log("Click the links below to access different pages:");

  pages.forEach(page => {
    console.log(`- http://localhost:${PORT}/${page}`);
  });
});