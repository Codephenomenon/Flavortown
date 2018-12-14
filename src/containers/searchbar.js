import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecipes, setLoading } from '../actions/index.js';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick(event) {
    event.preventDefault();
    this.props.setLoading();
    this.props.fetchRecipes(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className="centered row">
        <div className="eight wide column inputcontain">
          <div className="ui input focus">
            <input type="text" placeholder="Search Recipes..." onChange={this.onInputChange} value={this.state.input} />
          </div>
          <span className="input-group-btn">
            <button className="ui animated primary button" onClick={this.handleClick} >
              <div className="visible content">Search</div>
              <div className="hidden content"><i className="right arrow icon"></i></div>
            </button>
          </span>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRecipes, setLoading }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
