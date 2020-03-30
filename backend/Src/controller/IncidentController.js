const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {title, description, value} = request.body;
        /**
         * Busca o ong_id como header de autorização 
         */
        const ong_id = request.headers.authorization; 
        

        /**
         * @description ID O id da do caso é serial
         */
        const {id} = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });

        return response.json({ong_id});
    },
    async index (request,response) {
        const { page = 1} = request.query

        const [count] = await connection('incidents').count();

        console.log(count, "contador");

        response.header('X-Total-Count',count['count(*)']);

        /**
         * Lista todas as ongs cadastradas
         */
        const incidents = await connection('incidents')
        .join('ongs','ongs.id','=','incidents.ong_id')
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'])
        .limit(5)
        .offset(((page -1 ) * 5));

        return response.json(incidents);
    },
    async delete(request,response){
        const {id} = request.params;

         /**
         * Busca o ong_id logada
         */
        const ong_id = request.headers.authorization; 

        /**
         * Busca o id da ong 
         */
        const incidents = await connection('incidents').select('ong_id').where('id',id).first();
        
        

        /**
         *  Verifica se incidente pertence a ong logada 
         */    
        if(incidents.ong_id != ong_id){
            return response.status(401).json({error: 'Operation not permitted'});
        }        

        /**
         * Deleta o caso
         */
        await connection('incidents')
                .where('id',id)
                .delete();
        
        return response.status(204).send();
    }
};