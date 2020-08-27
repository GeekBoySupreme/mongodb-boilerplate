const mongoose = require('mongoose');

const ClickSchema = mongoose.Schema({
    action: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    minute: {
        type: String,
        required: true
    },
    second: {
        type: String,
        required: true
    }

});


module.exports = mongoose.model("Click", ClickSchema);