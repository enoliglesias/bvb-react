import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    return (
      <div className="recipe">
        {this.props.recipe.title.rendered}
      </div>
    );
  }
}

export default Recipe;
