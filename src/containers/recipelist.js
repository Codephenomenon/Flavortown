import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setActiveRecipe } from '../actions/index.js';

class RecipeList extends Component {

  onRecipeSelect(recipe) {
    console.log(recipe);
  }

  renderList() {
    function limitChars(title, limit = 25) {
      const newTitle = [];
      if (title.length > limit) {
        title.split(' ').reduce((acc, curr) => {
          if (acc + curr.length <= limit) {
            newTitle.push(curr);
          }
          return acc + curr.length;
        }, 0);
        return `${newTitle.join(' ')}...`;
      } else {
        return title;
      }
    }

    return this.props.data.recipes.map(recipe => {
      return (
        <li key={recipe.recipe_id} className="item recipeitem" onClick={() => this.onRecipeSelect(recipe)}>
          <img src={recipe.image_url} className="ui tiny bordered image" />
          <div className="content">
            <p className="header">{limitChars(recipe.title)}</p>
            <div className="description">rating: {recipe.social_rank.toFixed(2)}</div>
          </div>
        </li>
      );
    });
  }

  renderComponent() {
    if (this.props.data.loading === true) {
      return (
        <div className="loadcontain ui segment">
          <div className="nobackground ui active inverted dimmer">
            <div className="ui massive text loader">Loading...</div>
          </div>
        </div>
      );
    } else {
      if (this.props.data.recipes.length) {
        return (
          this.renderList()
        );
      } else {
        return (
          <div>
            Hello World!
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className="four wide column recipelist">
        {this.renderComponent()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
