//REQUERIMIENTOS
const express = require("express");
const path = require("path");
const multer = require("multer");
const logger = require("morgan");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const bodyParser = require('body-parser')
const { uuid } = require('uuidv4');

const app = express();

//APLICACIONES CON APP
//se configura el motor de plantilla
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//Configuración de imagén
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"),

    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    },
});
app.use(multer({ storage }).single("image"));
app.use(
    multer({
        dest: path.join(__dirname, "public/uploads"),
    }).single("image")
);
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//BODY-PARSER
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//se llaman las paginas
app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;