import React, { Component } from 'react';
import RecipeList from './RecipeList';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { recipes: [] }
  }


  componentWillMount() {
    fetch(`http://beginveganbegun.es/wp-json/wp/v2/posts?filter[date_query][after]=1984-01-01&per_page=3333`)
    const headers = new Headers();
    headers.append("Access-Control-Allow-Headers", "*");
    const opts = { method: 'GET',
                   headers: headers,
                   mode: 'cors',
                   cache: 'default' };

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
        <h1>Recipe List</h1>
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
