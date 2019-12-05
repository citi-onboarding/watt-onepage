import React, { Component } from 'react';
import './MyMobMenu.css';
import face from '../../ícones/facebook.png';
import linked from '../../ícones/linkedin-(1).png';
import insta from '../../ícones/instagram-(2).png';
import xIcon from '../../ícones/clear-24px.svg';
import WATTLogoVetor from '../../ícones/Logo_watt_consultoria_vetorizada_BRANCA.png';

function NavbarItem({ name, classe, escopo }) {
  return (
    <li className="liTable" >
      <button aria-label={`Botão para ${name}`} type="button" onClick={() => {
        escopo.handleClickScroll(classe);
        escopo.animate()
      }} >
        {name}
      </button>
    </li>
  );
}

function MediaLink({ src, alt, link }) {
  return (
    <li>
      <a target="_blank" href={link} rel="noopener noreferrer" >
        <img className="mobIcons" src={src} alt={alt} />
      </a>
    </li>
  );
}

function Navbar({ escopo }) {
  return (
    <nav>
      <ul className="ulTable" >

        <NavbarItem name="SERVIÇOS" classe=".servicos" escopo={escopo} />
        <NavbarItem name="QUEM SOMOS" classe=".quemSomos" escopo={escopo} />
        <NavbarItem name="CONTATO" classe=".boxContato" escopo={escopo} />

      </ul>

      <ul className="iconTable" >

        <MediaLink src={insta} link="https://www.instagram.com/wattconsultoria/" alt="Instagram" />
        <MediaLink src={linked} link="https://www.linkedin.com/company/watt-consultoria" alt="LinkedIn" />
        <MediaLink src={face} link="https://www.facebook.com/WattConsultoria/" alt="Facebook" />

      </ul>
    </nav>
  );
}

class MyMobMenu extends Component {
  constructor(props) {
    super(props);
  }


  handleClickScroll(nameOfClass) {

    const elmnt = document.querySelector(nameOfClass);
    elmnt.scrollIntoView();
  }
  animate() {
    const toBeAnimated = document.getElementById('toBeAnimated');
    if (toBeAnimated.className === 'animation') {
      toBeAnimated.className = 'animationOut';
      setTimeout(() => {
        toBeAnimated.className = 'animationNone';
      }, 600);
    } else {
      toBeAnimated.className = 'animation';
    }
  }

  render() {
    return (
      <header>
        {/* Aparelho em portrait */}
        <div className="casePortrait" >
          <div className="buttonWrapper" >
            <button aria-label="Botão de fechar o menu lateral" type="buttom" className="fixedMobButton" >
              <img onClick={this.animate} color="#FFFFFF" src={xIcon} alt="Fechar" height="60" width="60" />
            </button>
          </div>
          <div className="mobMenu" >
            <div className="firstMobLogo" >
              <img onClick={() => { window.scrollTo(0, 0); this.animate() }} src={WATTLogoVetor} alt="Logo da Watt Consusltoria" height="60" width="160" />
            </div>

            <Navbar escopo={this} />

          </div>
        </div>
        {/* Aparelho em landscape */}
        <div className="caseLandscape" >
          <div className="buttonWrapper" >
            <div className="firstMobLogo" >
              <button aria-label="botão de ir para o topo da página" onClick={() => { window.scrollTo(0, 0); this.animate(); }} type="button">
                <img className="logoLandscape" src={WATTLogoVetor} alt="WATT Consusltoria" height="60" width="160" />
              </button>
            </div>
            <button aria-label="Fechar o menu lateral" type="buttom" className="fixedMobButton" >
              <img onClick={this.animate} color="#FFFFFF" src={xIcon} alt="Fechar" height="60" width="60">
              </img>
            </button>
          </div>
          <div className="mobMenu" >

            <Navbar escopo={this} />

          </div>
        </div>
      </header>
    )
  }
}

export default MyMobMenu;
