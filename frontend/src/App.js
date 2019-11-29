import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyMobMenu from './components/MyMobMenu/MyMobMenu';
import background from './imagens/hossein-soltanloo-2ounD6ulngI-unsplash.jpg';
import Contato from './components/Contato/Contato';
import Servicos from './components/Servicos/Servicos';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  render(){
    return (
      <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundSize:"100%",
        backgroundRepeat: "no-repeat"
        }} >

        <MyNavBar />
        <div id="toBeAnimated" className="animationNone" >
          <MyMobMenu />
        </div>
        <div className = "content">  
        
          <a id="Sobre">Sobre</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
        </div>
        <Servicos />
        <Contato />
        
      </div>
    );

  }
}
export default App;
