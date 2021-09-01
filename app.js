const express = require("express");
const fs = require("fs");
const path = require("path");
const { awrap } = require("regenerator-runtime");

const app = express();

const htmlHome = fs.readFileSync(`${__dirname}/public/home.html`, "utf-8");
const htmlProjects = fs.readFileSync(
  `${__dirname}/public/projects.html`,
  "utf-8"
);
const htmlAboutMe = fs.readFileSync(
  `${__dirname}/public/aboutMe.html`,
  "utf-8"
);
const htmlRecipe = fs.readFileSync(
  `${__dirname}/public/recipeapp/indexRecipe.html`,
  "utf-8"
);
const htmlDice = fs.readFileSync(
  `${__dirname}/public/dicegame/index.html`,
  "utf-8"
);
const htmlPiano = fs.readFileSync(
  `${__dirname}/public/piano/pianoIndex.html`,
  "utf-8"
);

const htmlTetris = fs.readFileSync(
  `${__dirname}/public/tetris/index.html`,
  "utf-8"
);

const pkithingy = fs.readFileSync(
  `${__dirname}/public/C83851FBB0DE34360A402491C81FC601.txt`,
  "utf-8"
);

// app.set("view engine", "pug");
// app.set("views", "./views");

app.use(express.static(path.join(__dirname, "public")));

// Routes
// app.get("/", (req, res) => {
//   res.status(200).render("base");
// });

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlHome);
});

app.get("/about-me", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlAboutMe);
});

app.get("/projects", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlProjects);
});

app.get("/dicegame", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlDice);
});

app.get("/recipeapp", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlRecipe);
});

app.get("/piano", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlPiano);
});

app.get("/tetris", (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end(htmlTetris);
});

app.get(
  "/.well-known/pki-validation/C83851FBB0DE34360A402491C81FC601.txt",
  (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(pkithingy);
  }
);

module.exports = app;
