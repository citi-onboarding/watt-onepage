// Export our app routes
const cors = require('cors')
const nodemailer = require('nodemailer');

const apiHandlers = require('../views/contato');

exports = module.exports = function (app) {
	app.use(cors())
	// página principal
	app.get('/', function (req, res) {
		res.sendFile('index.html')
	})

	//envia os dados do banco
	app.get('/contato', apiHandlers.getContato)

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
			port: 587,
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
				res.send(error)
			} else {
				console.log('Email enviado');
				res.send('Enviado')
			}
		})
	})
}