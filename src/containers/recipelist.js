import React, { Component } from 'react';
import { connect } from 'react-redux';

class RecipeList extends Component {

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
        console.log(newTitle);
        return `${newTitle.join(' ')}...`;
      } else {
        return title;
      }
    }

    return this.props.data.recipes.map(recipe => {
      return (
        <li key={recipe.recipe_id} className="list-group-item recipeitem">
          <img src={recipe.image_url} className="img-thumbnail recipeitem-img" alt={recipe.title} />
          <div className="recipeitem-text">
            <p>{limitChars(recipe.title)}</p>
          </div>
        </li>
      );
    });
  }

  renderStart() {
    return (
      <div>
        Hello World!
      </div>
    );
  }

  render() {
    if (this.props.data.loading === true) {
      return (
        <ul className="col-md-4 recipelist">
          <div className="center-align">
            <i className="fa fa-circle-o-notch fa-spin recipelist__loader"></i>
          </div>
        </ul>
      );
    } else {
      return (
        <ul className="col-md-4 list-group recipelist">
          {this.props.data.recipes.length ? this.renderList() : this.renderStart()}
        </ul>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(mapStateToProps)(RecipeList);
