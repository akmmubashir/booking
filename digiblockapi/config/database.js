const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        const connect = await mongoose.connect(
            "mongodb+srv://mubi:mubi123456@airs.ndpcbwg.mongodb.net/?retryWrites=true&w=majority", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );

        console.log("Database connected and Running Succefully");
    } catch (error) {
        console.log(`Error :${error}`);
        process.exit();
    }
};

module.exports = connectDB;