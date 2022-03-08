const express = require('express')
const router = express.Router()

const dadosModel = require('../models/dadosModel')

router.post('/', (req, res) => {
    dadosModel.findOne(
        {'idArduino':{$eq: req.body.idArduino}})
    .exec()
    .then((result) =>{
        if(result==null){
            res.json({
                msg: 'Objeto não encontrado',
            })
        }
        else { 
            now = new Date()
            console.log(now)
            dadosModel.findOneAndUpdate(   
                {'idArduino':{$eq: req.body.idArduino}},
                {$set: {temp: req.body.temp, hum: req.body.hum, updated_at: now}},
                {new:true}
            )
            .then((obj)=>{
                res.json({
                    msg: 'Objeto alterado',
                    data: obj
                })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    msg: 'Ocorreu um erro'
                })
            })
        }
        
    })
    .catch(error => {
        res.json({
            msg: 'Ocorreu um erro'
        })
    })

})

module.exports = router