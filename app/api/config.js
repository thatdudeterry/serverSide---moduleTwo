const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB successfully at ${conn.connection.PORT}`);
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB;
