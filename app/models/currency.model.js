const mongoose = require('mongoose');

const currency = mongoose.model(
    'CURRnRates',
    new mongoose.Schema({
        code: String,
        alphaCode: String,
        numericCode: String,
        name: String,
        rate: Number,
        date: String,
        inverseRate: Number
    })
);
module.exports = currency;