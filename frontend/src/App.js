import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyMobMenu from './components/MyMobMenu/MyMobMenu';
import background from './imagens/hossein-soltanloo-2ounD6ulngI-unsplash.jpg';
import './App.css';
import Contato from './components/Contato/Contato'
import Servicos from './components/Servicos/Servicos'

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
          <a id="Servicos">Servicos</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
          <a id="Sobre">Sobre</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          
          <a id="Contato">Contato</a>
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>
        <Servicos />
        <Contato />
        
      </div>
    );

  }
}
export default App;
