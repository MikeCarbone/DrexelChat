import { User } from "../models";
import { register, login } from "../controllers/authentications";
import decode from "../controllers/decode";

module.exports = router => {
	router.get("/users", (req, res) => {
		User.find((err, users) => {
			if (err) return res.status(500).json({ success: false, error: err });
			return res.status(200).json({ success: true, data: users });
		});
	});

	router.route("/users/register").post(register);

	router.route("/users/login").post(login);

	router.delete("/users/", (req, res) => {
		const { userId } = req.body;
		if (!userId) {
			return res.status(500).json({ success: false, error: "No user id provided" });
		}
		User.remove({ _id: userId }, (error, comment) => {
			if (error) return res.status(500).json({ success: false, error });
			return res.status(200).json({ success: true });
		});
	});
};
