import React from 'react';
import './App.scss';
import Gallery from './components/Gallery';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      images: [],
      hero: ''
    }
  }

  componentDidMount(){
    fetch('http://directus.justinliu.co.uk/_/items/photos?fields=image.data.full_url.*,title.*,title_slug.*')
      .then(res => res.json())
      .then(({data}) => {
        const dataModel = data.reduce((model, item) => {

          if(item.title_slug === "yun-ting-liu"){
            
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
      .then(data => {
        this.setState({images: data});
      })
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

export default App;
