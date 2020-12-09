const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const names = ["python_project", "front_end", "back_end", "react", "capstone"];

const objprojects = {
  BankVault: "Game to crack a safe or go to jail",
  TikiHut: "Great place for advice",
  RedClover: "The Great Creation in the Making",
  CorruptionSolution: "Solving Greed around the World",
  GenerationBank: "A New Bank, For A New Generation",
};

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/projects", (req, res) => {
  //   const names = projects;
  res.render("projects", {
    locals: {
      names, //function 1
      names: Object.keys(objprojects), // function 2
    },
  });
});
// function 1
// // this is for to go through each id but we have to make a website for each key
// app.get("/projects/:id", (req, res) => {
//   //  this will work for all the links i just need to make a html for every id
//   const { id } = req.params;
//   res.render(id);
//   //   res.render("description");
// });
//function 2
// this is so i just need to use one website
app.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  res.render("description", { locals: { id, des: objprojects[id] } });
});

server.listen(3000, "localhost", () => {
  console.log("running on 3000");
});
