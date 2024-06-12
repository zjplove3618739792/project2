const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, required: true, unique: true },
  houseId: { type: String, required: true }
});

module.exports = mongoose.model('Booking', BookingSchema);
