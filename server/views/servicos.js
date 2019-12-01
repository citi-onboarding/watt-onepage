const keystone = require('keystone');
const Servicos = keystone.list('Servicos').model;
const handlers = {
  getServicos: function (req, res) {

    Servicos.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;