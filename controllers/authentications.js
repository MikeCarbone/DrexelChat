import { User } from "../models";
import * as jwt from "jsonwebtoken";
import { getSecret } from "../secrets";

function authenticationsRegister(req, res) {
	var { email, password } = req.body;
	if (!email || !password) {
		return res.status(500).json({
			success: false,
			error: "You must provide an email and password."
		});
	}

	email = email.toLowerCase();
	email = email.trim();

	var newUser = new User();
	newUser.email = email;
	newUser.hashedPassword = newUser.generateHash(password);

	newUser.save((err, user) => {
		if (err) {
			return res.status(500).json({
				success: false,
				error: err
			});
		}

		const token = jwt.sign(user.toObject(), getSecret("jwt"), { expiresIn: 60 * 60 * 24 });
		return res.status(201).json({
			message: `Welcome ${user.email}`,
			user,
			token
		});
	});
}

function authenticationsLogin(req, res) {
	var { email, password } = req.body;

	email = email.toLowerCase();
	email = email.trim();

	User.findOne({ email: email }, (err, user) => {
		if (err) return res.status(500).json({ message: "Something went wrong." });
		if (!user || !user.validPassword(password)) {
			return res.status(401).json({ message: "Unauthorised." });
		}
		const token = jwt.sign(user.toObject(), getSecret("jwt"), { expiresIn: 60 * 60 * 24 });
		return res.status(200).json({
			message: "Welcome back",
			user,
			token
		});
	});
}

export const register = authenticationsRegister;
export const login = authenticationsLogin;
