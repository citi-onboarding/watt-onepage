const keystone = require('keystone');
const Contato = keystone.list('Contato').model;
const handlers = {
  getContato: function (req, res) {

    Contato.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;