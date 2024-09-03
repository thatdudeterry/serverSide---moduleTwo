import morgan from "morgan";
import { json, urlencoded } from "express";
import cors from "cors";

const middlewares = (app) => {
	app.set("trust proxy", 1);
	app.use(json());
	app.use(urlencoded({ extended: true }));
	app.use(cors());
	app.use(morgan("dev"));
};

export default middlewares;
