const mongoose = require('mongoose')

const dados = mongoose.Schema({
    'idArduino' : {'type': 'String'},
    'temp' : {'type': 'Number'},
    'hum' : {'type': 'Number'},
    created_at: {'type': 'Date', default: Date.now},
    updated_at: {'type': 'Date'}

})

module.exports = mongoose.model('dadosModel',dados)


