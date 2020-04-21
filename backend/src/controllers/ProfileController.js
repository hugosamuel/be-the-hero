//não podemos ter mais  5 metodos de uma entidade temos 3 em IncidentsController (criação, alteração e delete)
// (Obs já temos um metodo de busca (lista) dentro)
//dentro de um controller, por convenção do "mvc" não podemos ter dois metodos de listagem dentro mesmo controller
//então foi criado este controller que retorna os casos especificos de uma ong

const connection = require('../database/connection'); //impportacao banco de dados


module.exports = { 
    async  index(rquest, response) { 
        const ong_id = request.headers.authorization; //acessando dados de uma ong que está logadada

        const incidents = await connection('incidents') //busca todos os incidents  de uma ong
        .where('ong_id, ong_id')
        .select('*');
        return response.json(incidents);
    }

} 