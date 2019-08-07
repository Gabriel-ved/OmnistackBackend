const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {

    async index(req, res){
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: {$ne: user}},
                { _id: {$nin: loggedDev.likes}},
                { _id: {$nin: loggedDev.dislikes}},
            ],
        })

        return res.json(users);
    },

    async store(req, res){
        const { username } = req.body;

        const userExists = await Dev.findOne({user: username});//busca usuario repetido para nn ter gravação redundante
        if(userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);
        //como a aplicação depende de um acesso a uma api
        //ela se torna assincrona
        //por isso async e await 

        const{name, bio, avatar_url: avatar} = response.data;

        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar //nao eh necessario fazer avatar: avatar pq ambas tem o mesmo nome(shortsyntax)
        });
        
        return res.json(dev);
    }
};