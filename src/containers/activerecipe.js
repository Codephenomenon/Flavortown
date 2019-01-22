import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveRecipe extends Component {

  constructor(props) {
    super(props);

    this.state = {
      likedCount: 0,
      likedRecipes: []
    };

    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
  }

  addLike() {
    this.setState({
      likedCount: this.state.likedCount + 1,
      likedRecipes: [...this.state.likedRecipes, this.props.activeRecipe.active]
    });
    this.props.data.recipes.forEach(recipe => {
      if (recipe === this.props.activeRecipe.active) {
        recipe.isLiked = true;
      }
    });
    this.props.activeRecipe.active.isLiked = true;
  }

  removeLike() {
    this.setState({
      likedCount: this.state.likedCount - 1,
      likedRecipes: this.state.likedRecipes.filter(recipe => recipe !== this.props.activeRecipe.active)
    });
    this.props.data.recipes.forEach(recipe => {
      if (recipe === this.props.activeRecipe.active) {
        recipe.isLiked = false;
      }
    });
    this.props.activeRecipe.active.isLiked = false;
  }

  handleLike() {
    if (this.props.activeRecipe.active) {
      if (this.props.activeRecipe.active.isLiked === false) {
        return true;
      } else {
        return false;
      }
    }
  }

  renderImage() {
    if (this.props.activeRecipe.active) {
      return (
        <img src={this.props.activeRecipe.active.image_url} className="ui fluid image" />
      );
    }
  }

  renderLikedList() {
    return this.state.likedRecipes.map(recipe => {
      console.log(recipe);
      return (
        <li key={recipe.recipe_id} className="activeitem__list-likedList-item">
          <h2>{recipe.title}</h2>
          <span>Publisher: {recipe.publisher}</span>
          <span><a href={recipe.source_url}>Details</a></span>
        </li>
      );
    });
  }

  renderToolbar() {
    return (
        <div className="activeitem_toolbar-container">
          <div className={'ui labeled button ' + (this.props.activeRecipe.active && this.handleLike() ? '' : 'disabled')} tabIndex="0">
            <div className="ui red button" onClick={this.addLike}>
              <i className="heart icon"></i> Like
            </div>
            <a className="ui basic red left pointing label">
              {this.state.likedCount > 0 ? this.state.likedCount : ''}
            </a>
          </div>
          <div className={'ui labeled button ' + (this.props.activeRecipe.active && !this.handleLike() ? '' : 'disabled')} tabIndex="0">
            <div className="ui basic blue button" onClick={this.removeLike}>
              <i className="tasks icon"></i> Remove
            </div>
            <a className="ui basic left pointing blue label">
              <i className={(this.props.activeRecipe.active ? 'cut' : '') + ' icon'}></i>
            </a>
          </div>
        </div>
    );
  }
  render() {
    return (
      <div className="eight wide column activeitem">
        <div className="activeitem__img">
          {this.renderImage()}
        </div>
        <div className="activeitem__toolbar">
          {this.renderToolbar()}
        </div>
        <div className="activeitem__list">
          <ul className="activeitem__list-likedList">
            {this.renderLikedList()}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    activeRecipe: state.activeRecipe
  };
}

export default connect(mapStateToProps)(ActiveRecipe);
