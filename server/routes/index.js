// Export our app routes
const cors = require('cors')

exports = module.exports = function (app) {

	app.use(cors())

	app.get('/', function (req, res) {
		res.sendFile('index.html')
	})
	app.get('/contato', function (req, res) {
		res.sendFile('index.html')
	})
}