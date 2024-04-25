const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

// Call router
const route = require("./routes/index");
// Connect DB
const db = require("./config/db/index");
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE
app.use(
  express.urlencoded({
    extended: true,
  })
); // for form submit
app.use(express.json()); // for javascript

// HTTP LOGGER

// TEMPALTE ENGINE
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
//? config đường dẫn voo view
app.set("views", path.join(__dirname, "resources", "views"));

//? Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
