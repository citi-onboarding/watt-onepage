import React, { Component } from 'react';
import MyNavBar from './components/MyNavBar/MyNavBar';
import MyMobMenu from './components/MyMobMenu/MyMobMenu';
import background from './imagens/lemur-eKFsacaWzOg-unsplash (1).jpg';
import Contato from './components/Contato/Contato';
import Servicos from './components/Servicos/Servicos';
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import QuemSomos from './components/QuemSomos/QuemSomos'
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imagem_banner: ''
    }
  }
  componentDidMount() {
    this.callApi()
      .then((response) => {
        this.setState({
          imagem_banner: response.data[0].imagens[0].url
        })

      })
  }
  callApi = async () => {
    const response = await axios.get('https://watt-onepage.herokuapp.com/banner')
    return response;
  }
  render() {

    const mystyle = {
      backgroundImage: 'url(' + this.state.imagem_banner + ')',
    }

    return (
      <div className="App" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
      }} >

        <MyNavBar />
        <div id="toBeAnimated" className="animationNone" >
          <MyMobMenu />
        </div>
        <div className="content">
          <div className="back-banner" style={mystyle}>
            <Banner />
            <Servicos />
          </div>
          <QuemSomos />
          <Contato />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
