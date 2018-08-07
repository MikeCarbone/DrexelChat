import { Message } from "../models";
import * as jwt from "jsonwebtoken";

module.exports = router => {
	router.get("/messages", (req, res) => {
		Message.find((err, messages) => {
			if (err) return res.status(500).json({ success: false, error: err });
			return res.status(200).json({ success: true, data: messages });
		});
	});

	router.post("/messages", (req, res) => {
		var user = jwt.decode(req.get("Authorization").substring(7));
		if ( !user ) {
			return res.status(500).json({
				success: false,
				error: "User has no authentication token"
			})
		}
		var sender = user._id;

		const message = new Message();

		const { content, group, date } = req.body;
		if (!sender || !content || !group || !date) {
			return res.status(500).json({
				success: false,
				error: "You must provide a group, content and date. "
			});
		}

		message.sender = sender;
		message.content = content;
		message.group = group;
		message.date = date;

		message.save(error => {
			if (error) return res.status(500).json({ success: false, error: error });
			return res.status(201).json({ success: true });
		});
	});

	router.delete(`/messages`, (req, res) => {
		const messageId = req.query.messageId;
		if (!messageId) {
			return res.status(500).json({ success: false, error: "No message id provided" });
		}
		Message.remove({ _id: messageId }, (error, comment) => {
			if (error) return res.status(500).json({ success: false, error });
			if (comment.n == 0) {
				return res.status(500).json({ success: false, error: "No message with given Id" });
			}
			return res.status(200).json({ success: true });
		});
	});
};
