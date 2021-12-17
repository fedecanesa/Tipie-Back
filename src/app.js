/* DEPENDENCIES */
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

/* APP - S */
const app = express();

/* ROUTES */
const loginRouter = require('./routes/login.routes');
const tableRouter = require('./routes/table.routes');

/* MIDDLEWARES */
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

/* ROUTES - Use*/
app.use("/api/login", loginRouter);
app.use("/api/table", tableRouter);


module.exports = {
    app
}