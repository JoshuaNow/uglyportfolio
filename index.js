const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const names = ["python_project", "front_end", "back_end", "react", "capstone"];

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/projects", (req, res) => {
  //   const names = projects;
  res.render("projects", {
    locals: {
      names,
    },
  });
});

app.get("/projects/:id", (req, res) => {
  //  this will work for all the links i just need to make a html for every id
  const { id } = req.params;
  res.render(id);
  //   res.render("description");
});

server.listen(3000, "localhost", () => {
  console.log("running on 3000");
});
