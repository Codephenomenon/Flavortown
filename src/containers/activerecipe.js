import React, { Component } from 'react';

class ActiveRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <div className="col-md-8 activeitem">
        <div className="activeitem__img">
        </div>
        <div className="activeitem__toolbar">
        </div>
        <div className="activeitem__list">
        </div>
      </div>
    );
  }
}

export default ActiveRecipe;
