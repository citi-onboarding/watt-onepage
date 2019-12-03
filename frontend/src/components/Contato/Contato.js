import React, { Component } from 'react';
import axios from 'axios'
import './Contato.css'
import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'


import instagramIcon from '../../ícones/instagram-logo.svg';
import phoneIcon from '../../ícones/phone-call.svg';
import envelopeIcon from '../../ícones/envelope.svg';
import placeIcon from '../../ícones/place.svg';



const config = require('../../config/config'); 
class Contato extends Component {
  constructor(props) {
    super(props)
    this.sendEmail = this.sendEmail.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleTelChange = this.handleTelChange.bind(this)
    this.handleAssuntoChange = this.handleAssuntoChange.bind(this)
    this.handleMesageChange = this.handleMesageChange.bind(this)

    this.state = {
      nome: '',
      email: '',
      tel: '',
      assunto: '',
      mensagem: '',
      media_contato: '',
      email_contato: '',
      address_contato: '',
      phone_contato: '',
      imagem_contato: '',
      flag: true
    };
  }
  componentDidMount() {
    this.callApi()
      .then((response) => { 
        this.setState({
          media_contato: response.data[0].media,
          email_contato: response.data[0].email,
          address_contato: response.data[0].address,
          phone_contato: response.data[0].phone,
          imagem_contato: response.data[0].imagens[0].url
        })

      })
  }

  callApi = async () => {
    const response = await axios.get(`${config.url}/contato`)
    return response;
  }

  handleNameChange(event) {
    this.setState({ nome: event.target.value });
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


  sendEmail(e) {
    this.setState({ flag: !this.state.flag });
    const nome = this.state.nome;
    const email = this.state.email;
    const tel = this.state.tel;
    const assunto = this.state.assunto;
    const mensagem = this.state.mensagem;
    (async () => {
      try {
        const res = await axios.post(`${config.url}/contato`, {
          nome: nome,
          email: email,
          tel: tel,
          assunto: assunto,
          mensagem: mensagem
        })
        if (res.status === 200) {
          this.setState({ flag: !this.state.flag });
          store.addNotification({
            title: "Enviado!",
            message: "Mensagem enviada",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
        }
        else {
          this.setState({ flag: !this.state.flag });
          store.addNotification({
            title: "Erro ao enviar!",
            message: "Tente novamente mais tarde",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
              duration: 3000,
              onScreen: true
            }
          });
        }
      } catch (err) {
        this.setState({ flag: !this.state.flag });
        store.addNotification({
          title: "Erro ao enviar!",
          message: "Tente novamente mais tarde",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 3000,
            onScreen: true
          }
        });
      }
    })()

    e.preventDefault();
  }

  render() {
    const mystyle = {
      backgroundImage: 'url(' + this.state.imagem_contato + ')',
    }
    const smallSpacedIcon = {
      width: '20px',
      height: '20px',
      marginRight: '10px'
    }

    return (
      <>
        <ReactNotification />
        <div id='contato' style={mystyle}>
          <svg className="top" viewBox="0 0 500 60">
            <polygon points="0,0 500,0 0,60" />
          </svg>
          <div className="contato-back-fade">
            <div className="boxContato">
              <div className="coluna" id="form-contato">
                <h1>Contato</h1>
                <form onSubmit={this.sendEmail}>
                  <div className="contato-box">
                    <div id="id-contato" className="coluna id">
                      <input required name="nome" placeholder="Nome" onChange={this.handleNameChange} value={this.state.name} />
                      <input required name="email" placeholder="E-mail" type='email' onChange={this.handleEmailChange} value={this.state.email} />
                      <input required name="telefone" placeholder="Telefone" type='tel' onChange={this.handleTelChange} value={this.state.Tel} />

                      <input required name="assunto" placeholder="Assunto" onChange={this.handleAssuntoChange} value={this.state.assunto} />
                    </div>
                    <div className="coluna">
                      <textarea required name="mensagem" placeholder="Como podemos te ajudar?" cols="50" rows="11" onChange={this.handleMesageChange} value={this.state.mensagem}></textarea>
                      {this.state.flag ?
                        <button className="button-contato" type="submit">Enviar</button> :
                        <button className="button-contato btn-block" type="submit">
                          Enviando...
                        </button>}

                    </div>
                  </div>
                  <div className="coluna" id="contato-info">
                    <div className = "infoContainer" ><img style={smallSpacedIcon} src = {instagramIcon}></img> {this.state.media_contato}</div>
                    <div className = "infoContainer" ><img style={smallSpacedIcon} src = {phoneIcon}></img> {this.state.phone_contato}</div>
                    <div className = "infoContainer" ><img style={smallSpacedIcon} src = {envelopeIcon}></img> {this.state.email_contato}</div>
                    <div className = "infoContainer" ><img style={smallSpacedIcon} src = {placeIcon}></img> {this.state.address_contato}</div>
                  </div>
                </form>
                
                <button onClick={()=>{window.scrollTo(0,0)}} id="btn-contact" className="btn-contact">
                  <div className="arrow-up"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Contato;
