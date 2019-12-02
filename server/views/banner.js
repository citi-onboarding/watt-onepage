const keystone = require('keystone');
const Banner = keystone.list('Banner').model;
const handlers = {
  getBanner: function (req, res) {

    Banner.find().exec(function (err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
      res.status(200).send(data);
    });
  }
}
module.exports = handlers;