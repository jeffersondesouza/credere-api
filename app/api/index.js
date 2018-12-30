/* Código simplório, apenas para fornecer o serviço para a aplicação */
let customers = require('./api-mock');

var api = {}

api.save = function (req, res) {
    const newCustomer = {
        ...req.body,
        id: Math.round(Math.random() * 1000)
    }
    customers = [...customers, newCustomer];
    res.status(200).json("Negociação recebida");
}


api.getAll = function (req, res) {
    res.json(customers);
}

api.getbyId = function (req, res) {
    const id = +req.params.id;
    const customer = customers.find(cust => +cust.id === id)
    if (customer) {
        res.json(customer);
    } else {
        res.status(404).json('no customer found');
    }
}

api.update = function (req, res) {
    const id = +req.params.id;

    const customerIndex = customers.findIndex(cust => +cust.id === id);

    if (customerIndex >= 0) {
        customers[customerIndex] = { ...req.body };
        res.json('Custumer Updated');
    } else {
        res.status(404).json('no customer found');
    }

}


api.delete = function (req, res) {
    const id = +req.params.id;

    const customerIndex = customers.findIndex(cust => +cust.id === id);

    if (customerIndex >= 0) {
        customers.splice(customerIndex, 1)
        res.json('Custumer deleted');
    } else {
        res.status(404).json('no customer found');

    }


}


api.cadastraNegociacao = function (req, res) {

    req.body.data = new Date(req.body.data.replace(/-/g, '/'));
    negociacoes.push(req.body);
    res.status(200).json("Negociação recebida");
};


module.exports = api;