const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/atividade', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({user});
    } catch (err) {
        return res.status(400).send({err: 'Envio falhou'});
    }
});

router.get('/atividade', async(req, res) => {
    try{
        const user = await User.find()
        return res.send({user})
    }catch (err){
        return res.status(400).send({err})
    }
})

module.exports = app => app.use('/aluno', router);