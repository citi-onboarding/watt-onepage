import React, { Component } from 'react';
import Slider from "react-slick";

import './Servicos.css';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

class Servicos extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
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
      // backgroundImage: 'url(' + this.state.imagem_contato + ')',
      // backgroundSize: 'cover',
      width: '100%',
      height: '120vh',
      display: 'flex',
    }
    return (
      <div style={mystyle}>
        <div className="back-fade">
          <div className="box">
            <div className="servicos">
              <h1>Servicos</h1>
              <Slider {...settings}>
                <div className="itens">
                  <h3>1</h3>
                </div>
                <div className="itens">
                  <h3>2</h3>
                </div>
                <div className="itens">
                  <h3>3</h3>
                </div>
                <div className="itens">
                  <h3>4</h3>
                </div>
                <div className="itens">
                  <h3>5</h3>
                </div>
                <div className="itens">
                  <h3>6</h3>
                </div>
                <div className="itens">
                  <h3>7</h3>
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
