const { Schema, model} = require('mongoose');
//sintaxe de desestruturação
//serve para importar apenas alguns atributos e nao o obj todo

const DevSchema = new Schema({//esquema de dados do dev
    name:{
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes:[{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, //grava data de criação e modificação
});

module.exports = model('Dev', DevSchema);