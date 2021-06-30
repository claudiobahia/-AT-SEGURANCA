const mongoose = require('../database');

const UserSchema = new mongoose.Schema({
    id_atividade:{
        type: Number,
        require: true,
        unique: true
    },
    id_aluno:{
        type: Number,
        require: true
    },
    disciplina:{
        type: String,
        require: true
    },
    nota: {
        type: Number,
        default: -1
    },
    data_enviado: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', UserSchema)

module.exports = User;