const path = require("path");
const express = require("express");
const app = express();
const port = 3000;
const indexRoute = require("./src/routes/indexRoute");
const imageRoute = require("./src/routes/imageRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src", "views"));

app.use("/", indexRoute);
app.use("/images", imageRoute);

app.listen(port, () => {
  console.log("Estamos rodando no http://localhost:" + port);
});
