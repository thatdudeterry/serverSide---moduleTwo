import http from "http";
import dotenv from "dotenv";
import app from "./app/app.js";

dotenv.config();

const port = process.env.PORT || 5005;

http.createServer(app).listen(port, () => {
	console.log(`The server is running on port ${port}`);
});
