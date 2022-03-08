const express = require('express')
const router = express.Router()

const dadosModel = require('../models/dadosModel')

router.post('/', (req, res) => {
    dadosModel.find({'idArduino':{$eq: req.body.idArduino}})
    .exec()
    .then((result)=>{
        if(result == 0){
            newArduino = new exemploModel({
               idArduino: req.body.idArduino,
               temp: req.body.temp,
               hum: req.body.hum,
            })
            newArduino.save()
            .then(result => {
                console.log('Objeto criado')
                res.json({
                    msg: 'Objeto criado',
                    data: result
                })
            })
            .catch(error => {
                console.log(error)
                res.json({msg: 'Ocorreu um erro'})
            })
        }
        else {
            res.json({msg:'Equipamento existente'})
            console.log(result)
        }
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router


