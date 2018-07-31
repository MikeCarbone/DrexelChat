import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

// create new instance of the mongoose.schema. the schema takes an
// object that shows the shape of your database entries.
const UsersSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		hashedPassword: { type: String, required: true },
		groups: { type: [String], required: true, default: [] }
	},
	{ timestamps: true }
);

UsersSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UsersSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.hashedPassword);
};

// export our module to use in server.js
export default mongoose.model("User", UsersSchema);
