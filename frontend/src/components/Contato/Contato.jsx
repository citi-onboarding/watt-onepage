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
import config from '../../config/config';

function InputLabel({ nome, placeholder, type, escopo, value, ariaLabel }) {
  return (
    <label htmlFor={nome} id={nome} aria-label={ariaLabel}>
      <input required name={nome} aria-labelledby={nome} placeholder={placeholder} type={type} state-type={nome} onChange={escopo.handleChange} value={value} />
    </label>
  );
}
function InfoContainer({ src, content, alt }) {
  return (
    <li className="infoContainer" >
      <img className="smallSpacedIcon" src={src} alt={alt} />
      {content}
    </li>
  );
}

class Contato extends Component {
  constructor(props) {
    super(props)
    this.sendEmail = this.sendEmail.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
      media_contato: '',
      email_contato: '',
      address_contato: '',
      phone_contato: '',
      imagem_contato: '',
      flag: true,
    };
  }

  componentDidMount() {
    (async () => {
      const response = await axios.get(`${config.url}/contato`);

      this.setState({
        media_contato: response.data[0].media,
        email_contato: response.data[0].email,
        address_contato: response.data[0].address,
        phone_contato: response.data[0].phone,
        imagem_contato: response.data[0].imagens[0].url,
      });
    })();
  }

  handleChange(event) {
    const newState = {};
    const type = event.target.getAttribute('state-type');
    newState[type] = event.target.value;
    this.setState(newState);
  }

  sendEmail(e) {
    this.setState({ flag: !this.state.flag });
    const {
      nome,
      email,
      telefone,
      assunto,
      mensagem,
    } = this.state;

    const notificationsBase = {
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    };

    const sendNotifications = (status) => {
      const { flag } = this.state;
      this.setState({ flag: !flag });
      const notification = status ? {
        title: 'Enviado!',
        message: 'Mensagem enviada',
        type: 'success',
      } : {
          title: 'Erro ao enviar!',
          message: 'Tente novamente mais tarde',
          type: 'danger',
        };
      store.addNotification(...notificationsBase, ...notification);
    };

    (async () => {
      try {
        const res = await axios.post(`${config.url}/contato`, {
          nome,
          email,
          telefone,
          assunto,
          mensagem,
        });
        sendNotifications(res.status === 200);
      } catch (err) {
        sendNotifications(false);
      }
    })();

    e.preventDefault();
  }

  render() {
    const {
      nome,
      email,
      telefone,
      assunto,
      mensagem,
      media_contato,
      email_contato,
      address_contato,
      phone_contato,
      imagem_contato,
      flag,
    } = this.state;

    const mystyle = {
      backgroundImage: `url(${imagem_contato})`,
    };

    return (
      <>
        <ReactNotification />
        <section id="contato" className="linha" style={mystyle}>
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
                      <InputLabel nome="nome" placeholder="Nome" type="text" escopo={this} ariaLabel="Insira seu nome" value={nome} />
                      <InputLabel nome="email" placeholder="E-mail" type="email" escopo={this} ariaLabel="Insira seu email" value={email} />
                      <InputLabel nome="telefone" placeholder="Telefone" type="text" escopo={this} ariaLabel="Insira seu telefone" value={telefone} />
                      <InputLabel nome="assunto" placeholder="Assunto" type="text" escopo={this} ariaLabel="Insira o assunto" value={assunto} />
                    </div>
                    <div id="id-mensagem" className="coluna">
                      <label id="mensagem" htmlFor="mensagem" aria-label="Como podemos te ajudar" >
                        <textarea id="mensagem" required name="mensagem" aria-labelledby="mensagem" placeholder="Como podemos te ajudar?" state-type="mensagem" cols="50" rows="9" onChange={this.handleChange} value={mensagem}></textarea>
                      </label>
                      {flag ?
                        (<button className="button-contato" type="submit">
                          Enviar
                         </button>)
                        :
                        (<button className="button-contato btn-block" type="submit">
                          Enviando...
                        </button>)
                      }
                    </div>
                  </div>
                  <ul className="coluna" id="contato-info">
                    <InfoContainer src={instagramIcon} content={media_contato} alt="icone do instagram"/>
                    <InfoContainer src={phoneIcon} content={phone_contato} alt="icone de telefone"/>
                    <InfoContainer src={envelopeIcon} content={email_contato} alt="icone de envelope" />
                    <InfoContainer src={placeIcon} content={address_contato} alt="icone de endereço" />
                  </ul>
                </form>
                <button aria-label="Ir para o topo da página" onClick={() => { window.scrollTo(0, 0) }} id="btn-contact" className="btn-contact">
                  <div className="arrow-up"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
export default Contato;
