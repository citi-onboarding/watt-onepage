// Export our app routes
const cors = require('cors')
const nodemailer = require('nodemailer');

const apiContato = require('../views/contato');
const apiQuemSomos = require('../views/QuemSomos');
const apiServicos = require('../views/servicos');
const apiBanner = require('../views/banner');

exports = module.exports = function (app) {
	app.use(cors())
	// página principal
	app.get('/', function (req, res) {
		res.sendFile('index.html')
	})

	//envia os dados do banco
	app.get('/contato', apiContato.getContato)
	app.get('/servicos', apiServicos.getServicos)
	app.get('/banner', apiBanner.getBanner)
	app.get('/quemsomos', apiQuemSomos.getQuemSomos)
	app.get('*', (req, res) => {
		res.redirect('/');
	});
	// envia o email
	app.post('/contato', (req, res) => {
		//baixa os dados
		const nome = req.body.nome
		const email = req.body.email
		const telefone = req.body.tel
		const assunto = req.body.assunto
		const mensagem = req.body.mensagem

		const transporter = nodemailer.createTransport({
			service: "gmail",
			port: 465,
			secure: false,
			auth: {
				user: "desafiopta@gmail.com",
				pass: "Parede101"
			},
			tls: { rejectUnauthorized: false }
		})

		const mailOptions = {
			from: `"${nome}" <${email}>`,
			to: 'vox@cin.ufpe.br',
			subject: assunto,
			text: `${nome} <${email}> <${telefone}>\n\n${mensagem}`
		}

		transporter.sendMail(mailOptions, function (error) {
			if (error) {
				console.log(error)
				res.status(500).send(error)
			} else {
				console.log('Email enviado');
				res.send('Enviado')
			}
		})
	})
}