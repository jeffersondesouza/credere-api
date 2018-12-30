/* Código simplório, apenas para fornecer o serviço para a aplicação */

var api = require('../api');

module.exports = function (app) {

    app.route('/customers')
        .post(api.save);

    app.route('/customers')
        .get(api.getAll);

    app.route('/customers/:id')
        .get(api.getbyId);

    app.route('/customers/:id')
        .patch(api.update);

    app.route('/customers/:id')
        .delete(api.delete);


};