const mongoose = require("mongoose");

const Booking = new mongoose.Schema({
  vehicle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  no_of_days: {
    type: Number,
  },
  booking_date: {
    type: String,
  },
  booking_time: {
    type: String,
  },
  address: {
    type: String,
  },
  contact_no: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("Booking", Booking);




