const express = require('express');
const axios = require('./axios.js');


const User = require('../models/User');

const router = express.Router();

router.get('/atividade', async(req, res) => {
    try{
        const user = await User.find()
        return res.send({user})
    }catch (err){
        return res.status(400).send({err})
    }
})
router.post('/atividade', async (req, res) => {
    try {
        const id_atividade  = req.body.id_atividade

        var body = await axios();
        var user;
        var checker = 0;
        var index = -1;
        body.forEach(element => {
            if(element.id_atividade == id_atividade){
                const x = body.lastIndexOf(element)
                body[x].nota = req.body.nota;
                checker = 1;
                index = x
                user = body[x]
            }
        });
        if (checker == 0) return res.status(400).send({err: 'Id atividade invalido'});
        const posted = await User.create(user);
        return res.send({posted});

    } catch (err) {
        return res.status(400).send({err: 'erro correcao'});
    }
});

module.exports = app => app.use('/professor', router);