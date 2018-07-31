import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import mongoose from "mongoose";
import {
	getSecret
} from "./secrets";
import {
	ESRCH
} from "constants";
const path = require("path");
const expressJWT = require("express-jwt");

// create our instances
const app = express();
const router = express.Router();

// set port to either a predetermined port number, or 3001
const API_PORT = process.env.API_PORT || 3001;

// db config -- set URI from mLab in secrets.js
mongoose.connect(getSecret("dbUri"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(function (req, res, next) {
	res.io = io;
	next();
});
app.use(express.static(path.join(__dirname, "client")));


// This code requires any api request except register and login to include a JWT token in the header
// Disable for Development
// app.use(
// 	"/api",
// 	expressJWT({
// 		secret: getSecret("jwt")
// 	}).unless({
// 		path: [{
// 			url: "/api/users/register",
// 			methods: ["POST"]
// 		}, {
// 			url: "/api/users/login",
// 			methods: ["POST"]
// 		}]
// 	})
// );

router.get("/", function (req, res, next) {
	res.io.emit("test", "helloWorld!");
});

// Get ALL routes from routes folder
require("./routes")(router);

// Use our router configuration when we call /api
app.use("/api", router);

router.get("/", (req, res) => {
	return res.status(200).json({ success: true, data: "test123" });
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client"));
});

var server = app.listen(API_PORT, () => console.log(`Express Listening on port ${API_PORT}`));
//initalize server for socket.io
var io = require("socket.io")(server);