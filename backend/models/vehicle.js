const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    doorLockState: {
        type: String,
        required: true,
    },
    chargingStatus: {
        type: String,
        required: true,
    },
    updateTime: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('status', VehicleSchema);
