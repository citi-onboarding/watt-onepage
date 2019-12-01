import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios'
import './Servicos.css';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"

class Servicos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: ''
    };
  }
  componentDidMount() {
    this.callAPI()
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
  }

  callAPI = async () => {
    let response = await axios.get('http://localhost:3000/servicos');
    return response;
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
      width: '100%',
      height: '120vh',
      display: 'flex',
    }

    const { posts } = this.state;
    return (
      <div style={mystyle} >
        {console.log(this.state.posts[1])}
        <div className="back-fade">
          <div className="box">
            <div className="servicos">
              <h1>SERVIÇOS</h1>
              <Slider {...settings}>
                {posts && posts.map((post) => {
                  return (
                    <div className="slide-item">
                      <h2>{post['Título']}</h2>
                      <img src={post.imagens[0].url} />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Servicos;
