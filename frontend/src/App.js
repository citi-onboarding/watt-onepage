import React, { Component } from 'react';
import logo from './img.jpg';
import axios from 'axios'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.sendEmail = this.sendEmail.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTelChange = this.handleTelChange.bind(this)
    this.handleAssuntoChange = this.handleAssuntoChange.bind(this)
    this.handleMesageChange = this.handleMesageChange.bind(this)

    this.state = {
      name: '',
      email: '',
      tel: '',
      assunto: '',
      mensagem: '',
      media_contato: '',
      email_contato: '',
      address_contato: '',
      phone_contato: '',
      imagem_contato: ''
    };


  }
  componentDidMount() {
    this.callApi()
      .then((response) => this.setState({
        media_contato: response.data[0].media,
        email_contato: response.data[0].email,
        address_contato: response.data[0].address,
        phone_contato: response.data[0].phone,
        imagem_contato: response.data[0].imagens[0].url
      }))
  }

  callApi = async () => {
    const response = await axios.get('http://localhost:3000/contato')
    return response;
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleAssuntoChange(event) {
    this.setState({ assunto: event.target.value });
  }

  handleMesageChange(event) {
    this.setState({ mensagem: event.target.value });
  }

  handleTelChange(event) {
    this.setState({ tel: event.target.value });
  }


  sendEmail() {
    const nome = this.state.name;
    const email = this.state.email;
    const tel = this.state.tel;
    const assunto = this.state.assunto;
    const mensagem = this.state.mensagem;
    (async () => {
      const res = await axios.post('http://localhost:3000/contato', {
        nome: nome,
        email: email,
        tel: tel,
        assunto: assunto,
        mensagem: mensagem
      }).then(function (response) {
        if (response.status === 200) { alert("Enviado com sucesso") }
        else { alert("Erro ao enviar, tente novamente mais tarde" + response.status) }
      })
    })()
  }

  render() {
    const mystyle = {
      backgroundImage: 'url(' + this.state.imagem_contato + ')',
      backgroundSize: 'cover',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
    }
    return (
      <>
        <div style={mystyle}>
          <div className="back-fade">
            <div className="coluna" id="form-contato">
              <h1>Contato</h1>
              <div className="linha">
                <div id="id-contato" className="coluna id">
                  <input name="nome" placeholder="Nome" onChange={this.handleNameChange} value={this.state.name} />
                  <input name="email" placeholder="E-mail" type='email' onChange={this.handleEmailChange} value={this.state.email} />
                  <input name="telefone" placeholder="Telefone" type='tel' onChange={this.handleTelChange} value={this.state.Tel} />

                  <input name="assunto" placeholder="Assunto" onChange={this.handleAssuntoChange} value={this.state.assunto} />
                </div>
                <div id="mes-contato" className="coluna">
                  <textarea name="mensagem" placeholder="Mensagem" cols="50" rows="11" onChange={this.handleMesageChange} value={this.state.mensagem}></textarea>
                  <button id="button-contato" onClick={this.sendEmail}>Enviar</button>
                </div>
              </div>
              <div className="coluna" id="contato-info">
                <small>{this.state.media_contato}</small>
                <small>{this.state.phone_contato}</small>
                <small>{this.state.email_contato}</small>
                <small>{this.state.address_contato}</small>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default App;
