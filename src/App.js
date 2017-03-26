import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { recipes: [] }
  }


  componentWillMount() {
    fetch(`http://beginveganbegun.es/wp-json/wp/v2/posts?filter[date_query][after]=1984-01-01&per_page=3333`)
    .then(response => response.json())
      .then(recipes => {
        this.setState({
          recipes: recipes
        });
      });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
