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
		let body = '';
		req.on('data', (data) => {
			body += data;
		})
		//após o download
		req.on('end', () => {
			//transformando em objeto
			const nome = (JSON.parse(body).nome)
			const email = (JSON.parse(body).email)
			const assunto = (JSON.parse(body).assunto)
			const mensagem = (JSON.parse(body).mensagem)
			console.log(body)
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
				text: `${nome} <${email}>\n\n${mensagem}`
			}

			transporter.sendMail(mailOptions, function (error) {
				if (error) {
					console.log(error)
				} else {
					console.log('Email enviado');
				}
			})
		})
	})
}