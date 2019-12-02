const keystone = require('keystone');
const QuemSomos = keystone.list('QuemSomos').model;
const handlers = {
  getQuemSomos: function (req, res) {

    QuemSomos.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;