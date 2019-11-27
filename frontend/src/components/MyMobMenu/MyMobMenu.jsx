import React,  {Component} from 'react';
import './MyMobMenu.css';
import face from '../../ícones/facebook.png';
import linked from '../../ícones/linkedin-(1).png';
import insta from '../../ícones/instagram-(2).png';
import menuIcon from '../../ícones/menu-24px.svg';
import WATTLogoVetor from '../../ícones/Logo_watt_consultoria_vetorizada_BRANCA.png';

class MyMobMenu extends Component{
    constructor(props){
        super(props);
    }

      
  handleClickServicos(){

    let elmnt = document.getElementById("Servicos");
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }
  handleClickSobre(){

    let elmnt = document.getElementById("Sobre");
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }
  handleClickContato(){

    let elmnt = document.getElementById("Contato");
    elmnt.scrollIntoView({
      behavior: "smooth",
    });
  }
  

    render(){
        return(
            <div id="MobMenu" className="mobMenu" >
                <div id="mobLogo" className="firstMobLogo" >
                    <a href="/"><img src={WATTLogoVetor} alt="WATT Consusltoria" height="60" width="160"></img></a>
                </div>
                
                <div className = "ulTable" >
                    
                    <div className = "liTable" ><a onClick={()=> this.handleClickServicos()} >SERVIÇOS</a></div>
                    <div className = "liTable" ><a onClick={()=> this.handleClickSobre()} >SOBRE</a></div>
                    <div className = "liTable" ><a onClick={()=> this.handleClickContato()} >CONTATO</a></div>
                    <div className = "liTable" ><a target="_blank" href="http://wattconsultoria.com.br/blog/">BLOG</a></div>
                    
                </div>
                
                <div className="iconTable" >
                    <a href="https://www.instagram.com/wattconsultoria/" >
                        <img className="icons" src={insta} alt="Instagram"></img>
                    </a>
                
                    <a href="https://www.linkedin.com/company/watt-consultoria" >
                        <img className="icons" src={linked} alt="LinkedIn"></img>
                    </a>
                
                    <a href="https://www.facebook.com/WattConsultoria/" >
                        <img className="icons" src={face} alt="Facebook"></img>
                    </a>
                </div>
            </div>
        )
    }
}

export default MyMobMenu;


