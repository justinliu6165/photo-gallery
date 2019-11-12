import React from 'react';
import MainPage from './components/MainPage/MainPage'
import ImagePage from './components/ImagePage/ImagePage'
import {Switch,  Route } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/photo/:slug' render={props => <ImagePage {...props} />}/>
      </Switch>
    );
  }
}

export default App;
