import React from 'react';
import './MainPage.scss';
import Gallery from '../Gallery';
import { FetchImages } from '../../js/api';

class MainPage extends React.Component {
  constructor(){
    super();
    this.state = {
      images: [],
      hero: ''
    }
  }

  componentDidMount(){
    FetchImages()
      .then(({data}) => {
        const dataModel = data.reduce((model, item) => {

          if(item.title_slug === "yun-ting-liu") {
            
            this.setState({hero: item.image.data.full_url})

          } else {

            const tempItem = {
              title: item.title,
              url: item.image.data.full_url,
              slug: item.title_slug
            };

            model.push(tempItem);

          }

          return model;
        }, []);

        return dataModel;
      })
      .then(images => this.setState({images}));
  }

  render(){
    return (
      <div className="app">
        <div className="hero">
          <img className="hero__img" src={this.state.hero}/>
            <p className="hero__text">
              A web development background with an interest in photography.
            </p>
        </div>
        <div className="app__content">
          <Gallery images={this.state.images}/>
          <div className="app__end-note">
            More to come...
          </div>
        </div>
       
      </div>
    );
  }
}

export default MainPage;
