import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';
import Contato from './components/Contato/Contato'
import Servicos from './components/Servicos/Servicos'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Banner />
        <Servicos />
        <Contato />
        <Footer />
      </>
    )
  }
}
export default App;
