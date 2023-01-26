const mongoose = require("mongoose");
const Vehicle = new mongoose.Schema({
  user_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  vehicle_name: {
    type: String,
  },
  vehicle_image: {
    type: String,
  },
  vehicle_company: {
    type: String,
  },
  vehicle_desc: {
    type: String,
  },
  vehicle_rich_desc: {
    type: String,
  },
  is_featured: {
    type: Boolean,
  },
  booking_cost: {
    type: String,
  },
  vehicle_sku: {
    type: String,
  },
  vehicle_category: {
    type: String,
  },
});
module.exports = mongoose.model("Vehicle", Vehicle);


