import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list">
        {this.props.recipes.map(recipe => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    );
  }
}

export default RecipeList;
