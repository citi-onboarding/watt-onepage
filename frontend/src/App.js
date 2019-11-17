import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.sendEmail = this.sendEmail.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleAssuntoChange = this.handleAssuntoChange.bind(this)
    this.handleMesageChange = this.handleMesageChange.bind(this)

    this.state = {
      name: '',
      email: '',
      assunto: '',
      mensagem: ''
    }
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

  sendEmail() {
    const nome = this.state.name;
    const email = this.state.email;
    const assunto = this.state.assunto;
    const mensagem = this.state.mensagem;
    (async () => {
      const res = await axios.post('http://localhost:3001/contato', {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
      })
    })()
  }

  componentDidMount() {
    (async () => {
      const res = await axios.get('http://localhost:3001')
      console.log(res)
    })()
  }
  render() {
    return (
      <>
        <div className="coluna" id="form-contato">
          <h1>Contato</h1>
          <div className="linha">
            <div id="id-contato" className="coluna id">
              <label for="nome">Nome</label>
              <input name="nome" onChange={this.handleNameChange} value={this.state.name} />
              <label for="email">E-mail</label>
              <input name="email" type='email' onChange={this.handleEmailChange} value={this.state.email} />
              <label for="email">Telefone</label>
              <input name="telefone" type='tel' onChange={this.handleEmailChange} value={this.state.email} />
              <label for="assunto">Assunto</label>
              <input name="assunto" onChange={this.handleAssuntoChange} value={this.state.assunto} />
            </div>
            <div id="mes-contato" className="coluna">
              <label for="mensagem">Mensagem</label>
              <textarea name="mensagem" cols="50" rows="11" onChange={this.handleMesageChange} value={this.state.mensagem}></textarea>
              <button id="button-contato" onClick={this.sendEmail}>Enviar</button>
            </div>
          </div>
          <div class="coluna" id="contato-info">
            <small>@media</small>
            <small>phone</small>
            <small>email</small>
            <small>endereço</small>
          </div>
        </div>
      </>
    )
  }
}
export default App;
