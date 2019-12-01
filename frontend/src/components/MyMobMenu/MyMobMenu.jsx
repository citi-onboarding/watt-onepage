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

  
    handleClickScroll(nameOfClass){

      let elmnt = document.querySelector(nameOfClass);
      elmnt.scrollIntoView({  
        behavior: "smooth",
      });
    }
  animate(){
    if(document.getElementById('toBeAnimated').className =='animation'){

      document.getElementById('toBeAnimated').className ='animationOut';
      setTimeout(function(){ document.getElementById('toBeAnimated').className ='animationNone'; }, 600);
      
    }else{
      
      document.getElementById('toBeAnimated').className ='animation';
    
    }
  }

  render(){
    return(
      <div>
        {/* Aparelho em portrait */}
        <div className="casePortrait" >
          <div className="buttonWrapper" >
            <a className="fixedMobButton" ><img onClick={()=> this.animate()} color="#FFFFFF" src={menuIcon} alt="WATT Consusltoria" height="60" width="60"></img></a>  
          </div>
          <div id="MobMenu" className="mobMenu" >     

            <div id="mobLogo" className="firstMobLogo" >
              <img onClick={()=>{window.scrollTo(0,0);this.animate()}} src={WATTLogoVetor} alt="WATT Consusltoria" height="60" width="160"></img>
            </div>
            
            <div className = "ulTable" >
                
              <div className = "liTable" ><a onClick={()=> {this.handleClickScroll('.boxServicos');this.animate()}} >SERVIÇOS</a></div>
              <div className = "liTable" ><a onClick={()=> {this.handleClickScroll('.boxSobre');this.animate()}} >SOBRE NÓS</a></div>
              <div className = "liTable" ><a onClick={()=> {this.handleClickScroll('.boxContato');this.animate()}} >CONTATO</a></div>
              <div className = "liTable" ><a target="_blank" href="http://wattconsultoria.com.br/blog/">BLOG</a></div>
              
            </div>
            
            <div className="iconTable" >
              <a target="_blank" href="https://www.instagram.com/wattconsultoria/" >
                <img className="mobIcons" src={insta} alt="Instagram"></img>
              </a>
          
              <a target="_blank" href="https://www.linkedin.com/company/watt-consultoria" >
                <img className="mobIcons" src={linked} alt="LinkedIn"></img>
              </a>
          
              <a target="_blank" href="https://www.facebook.com/WattConsultoria/" >
                <img className="mobIcons" src={face} alt="Facebook"></img>
              </a>
            </div>
          </div>
        </div>
      {/* Aparelho em landscape */}
        <div className="caseLandscape" >
          <div className="buttonWrapper" >
            <div id="mobLogo" className="firstMobLogo" >
              <a href="/"><img className="logoLandscape" src={WATTLogoVetor} alt="WATT Consusltoria" height="60" width="160"></img></a>
            </div>
            <a className="fixedMobButton" ><img onClick={()=> this.animate()} color="#FFFFFF" src={menuIcon} alt="WATT Consusltoria" height="60" width="60"></img></a>  
          </div>
          <div id="MobMenu" className="mobMenu" >     
            
            <div className = "ulTable" >
                
              <div className = "liTable" ><a onClick={()=> {this.handleClickServicos();this.animate()}} >SERVIÇOS</a></div>
              <div className = "liTable" ><a onClick={()=> {this.handleClickSobre();this.animate()}} >SOBRE</a></div>
              <div className = "liTable" ><a onClick={()=> {this.handleClickContato();this.animate()}} >CONTATO</a></div>
              <div className = "liTable" ><a target="_blank" href="http://wattconsultoria.com.br/blog/">BLOG</a></div>
              
            </div>
            
            <div className="iconTable" >
              <a href="https://www.instagram.com/wattconsultoria/" >
                <img className="mobIcons" src={insta} alt="Instagram"></img>
              </a>
          
              <a href="https://www.linkedin.com/company/watt-consultoria" >
                <img className="mobIcons" src={linked} alt="LinkedIn"></img>
              </a>
          
              <a href="https://www.facebook.com/WattConsultoria/" >
                <img className="mobIcons" src={face} alt="Facebook"></img>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyMobMenu;


