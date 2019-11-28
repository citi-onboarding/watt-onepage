import React, { Component } from 'react';
import Slider from "react-slick";

import './Servicos.css';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

class Servicos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titulo: '',
      descricao: '',
      imagem: ''
    };
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    const mystyle = {
      // backgroundImage: 'url(' + this.state.imagem_servico + ')',
      // backgroundSize: 'cover',
      width: '100%',
      height: '120vh',
      display: 'flex',
    }
    const background = {
      // backgroundImage: 'url(' + this.state.imagem_item + ')',
      // backgroundSize: 'cover',
    }
    return (
      <div style={mystyle}>
        <div className="back-fade">
          <div className="box">
            <div className="servicos">
              <h1>SERVIÇOS</h1>
              <Slider {...settings}>
                <div className="slide-item" style={background}>
                  <h2>Titulo do Serviço</h2>
                </div>
                <div className="slide-item" style={background}>
                  <h2>Titulo do Serviço</h2>
                </div>
                <div className="slide-item" style={background}>
                  <h2>Titulo do Serviço</h2>
                </div>
                <div className="slide-item" style={background}>
                  <h2>Titulo do Serviço</h2>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Servicos;
