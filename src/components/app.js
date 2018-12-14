import React, { Component } from 'react';

import SearchBar from '../containers/searchbar.js';
import RecipeList from '../containers/recipelist.js';
import ActiveRecipe from '../containers/activerecipe.js';

export default class App extends Component {
  render() {
    return (
      <div className="ui grid">
        <SearchBar />
        <div className="centered row">
          <RecipeList />
          <ActiveRecipe />
        </div>
      </div>
    );
  }
}
