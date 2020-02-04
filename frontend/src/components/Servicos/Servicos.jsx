import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import './Servicos.css';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import config from '../../config/config';

class Servicos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: '',
    };
  }

  componentDidMount() {
    (async () => {
      const response = await axios.get(`${config.url}/servicos`);
      this.setState({
        posts: response.data,
      });
    })();
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
            slidesToShow: 1,
            dots: false
          }
        }
      ]
    };
    const { posts } = this.state;
    return (
      <section id="servicos">
        <div className="back-fade">
          <div className="servicos">
            <h1>SERVIÇOS</h1>
            <Slider {...settings}>
              {posts && posts.map((post) => {
                return (
                  <div className="slide-item">
                    <h2>{post['Título']}</h2>
                    <div className="descricao">
                      <p>
                        {post['Descrição']}
                      </p>
                    </div>
                    <img alt={`Imagem de ${post['Título']}`} src={post.imagens[0].url} />
                  </div>
                )
              })}
            </Slider>
          </div>
          <svg className="bottom" viewBox="0 0 500 60">
            <polygon points="0,0 250,60 500,0 500,60 0,60" />
          </svg>
        </div>
      </section>
    );
  }
}

export default Servicos;