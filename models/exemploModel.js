const mongoose = require('mongoose')

const exemplo = mongoose.Schema({
    'idArduino' : {'type': 'String'},
    'temp' : {'type': 'Number'},
    'hum' : {'type': 'Number'},
    date: {'type': Date, default: Date.now}
})

module.exports = mongoose.model('exemploModel',exemplo)