const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

const dadosModel = require('../models/dadosModel')

router.get('/:idArduino', (req, res) => {
    
    dadosModel.findOne({'idArduino':{$eq: req.params.idArduino}})
    .exec()
    .then((result)=>{
        if(result != 0){
            return res.json({
                temp:result.temp,
                hum: result.hum,
                created_at: result.created_at,
                updated_at: result.updated_at,
                
            })
        }
        return res.json({
            msg:'não encontrado'
        })
        
    })
    .catch(error =>{
        console.log(error)
    })
})

module.exports = router


