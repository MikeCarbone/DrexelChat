import mongoose from "mongoose";
const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const MessagesSchema = new Schema(
	{
		sender: { type: String, required: true },
		content: { type: String, required: true, maxlength: 300 },
		group: { type: String, required: true },
		date: { type: Date, required: true, default: new Date().now }
	},
	{ timestamps: true }
);

// export our module to use in server.js
export default mongoose.model("Message", MessagesSchema);
