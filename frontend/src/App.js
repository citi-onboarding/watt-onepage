import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyMobMenu from './components/MyMobMenu/MyMobMenu';
import Contato from './components/Contato/Contato';
import Servicos from './components/Servicos/Servicos';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import QuemSomos from './components/QuemSomos/QuemSomos';
import axios from 'axios';
import './App.css';
import config from './config/config';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagem_banner: '',
    };
  }

  componentDidMount() {
    (async () => {
      const response = await axios.get(`${config.url}/banner`)
      this.setState({
        imagem_banner: response.data[0].imagens[0].url,
      });
    })();
  }

  render() {
    const { imagem_banner } = this.state;

    const mystyle = {
      backgroundImage: `url(${imagem_banner}`,
    };

    return (
      <section className="App" style={{
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
      }} >

        <MyNavBar />
        <div id="toBeAnimated" className="animationNone" >
          <MyMobMenu />
        </div>
        <section className="content">
          <div className="back-banner" style={mystyle}>
            <Banner />
            <Servicos />
          </div>
          <QuemSomos />
          <Contato />
        </section>
        <Footer />
      </section>
    );
  }
}

export default App;
