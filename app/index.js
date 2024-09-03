import express from require("express");
import cors from require("cors");
import morgan from require("morgan");
import middlewares from "./middlewares/index.js"
import routeHandler from require("./routes/index.js");
import errorHandler from "./middlewares/errorHandler.js";
import catchAllHandler from "./middlewares/catchAllHandler.js";

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1", routeHandler);
app.use(catchAllHandler);
app.use(errorHandler);

export default app;
