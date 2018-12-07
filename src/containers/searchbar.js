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
      <div className="row inputcontain">
        <div className="input-group col-md-6 col-md-offset-3">
          <input type="text" className="form-control inputcontain__input" placeholder="Search Recipes..." onChange={this.onInputChange} value={this.state.input} />
          <span className="input-group-btn">
            <button className="btn btn-primary" onClick={this.handleClick} >check</button>
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
