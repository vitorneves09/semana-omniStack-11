const connection = require('../database/connection');
const cryto  = require('crypto');

module.exports ={
    async index (request,response) {

        /**
         * Lista todas as ongs cadastradas
         */
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    async create(request,response){

        const {name, email, whatsapp, city, uf} = request.body;

        /**
         * GEra id da ong em Hexadecimal  
         */
        const id = cryto.randomBytes(4).toString('HEX');
        
        /**
         * Insere as ongs
         */
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({id});
    }
}