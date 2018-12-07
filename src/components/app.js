import React, { Component } from 'react';

import SearchBar from '../containers/searchbar.js';
import RecipeList from '../containers/recipelist.js';
import ActiveRecipe from '../containers/activerecipe.js';

export default class App extends Component {
  render() {
    return (
      <div className="container-fluid appcontain">
        <SearchBar />
        <div className="row">
          <RecipeList />
          <ActiveRecipe />
        </div>
      </div>
    );
  }
}
