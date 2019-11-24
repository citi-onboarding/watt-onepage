import React,  {Component} from 'react';
import './MyNavBar.css';
import face from '../../ícones/facebook.png';
import linked from '../../ícones/linkedin-(1).png';
import insta from '../../ícones/instagram-(2).png';
import WATTLogo from '../../WATTBRANCO.png';

class MyNavBar extends Component{
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
        <div id="navBar" className="navBar" >
          <div id="logo" className="firstLogo" >
            <a href="/"><img src={WATTLogo} alt="WATT Consusltoria" height="60" width="60"></img></a>
          </div>
            <ul>
              
              <li><a onClick={()=> this.handleClickServicos()} >SERVIÇOS</a></li>
              <li><a onClick={()=> this.handleClickSobre()} >SOBRE</a></li>
              <li><a onClick={()=> this.handleClickContato()} >CONTATO</a></li>
              <li><a target="_blank" href="http://wattconsultoria.com.br/blog/">BLOG</a></li>
              
              <li>
                
                  <a href="https://www.instagram.com/wattconsultoria/" >
                    <img className="icons" src={insta} alt="Instagram"></img>
                  </a>
                
              </li>
                
              <li>
                
                  <a href="https://www.linkedin.com/company/watt-consultoria" >
                    <img className="icons" src={linked} alt="LinkedIn"></img>
                  </a>
                
              </li>
                  
              <li>
                
                  <a href="https://www.facebook.com/WattConsultoria/" >
                    <img className="icons" src={face} alt="Facebook"></img>
                  </a>
                
              </li>
              

            </ul>
        </div>
        )
    }

}

export default MyNavBar;