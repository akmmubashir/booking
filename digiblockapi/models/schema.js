const mongoose = require("mongoose");

const digiapi = mongoose.Schema({
    id: { type: String },
    flight_name: { type: String },
    departure_airport: { type: String },
    arrival_airport: { type: String },
    departure_time: { type: String },
    arrival_time: { type: String },
    price: { type: String },
});
const Project = mongoose.model("Admin", digiapi);

module.exports = { Project };