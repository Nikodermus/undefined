import React, { Component } from 'react';

import button from '../../resources/images/button.png';

class SecretPanel extends Component {
  state = { hidden: false };

  displayHidden = () => {
    this.setState({ hidden: true });
  };

  render() {
    return (
      <div className="test">
        <div
          className={`test__inner ${this.state.hidden ? 'test__inner--show' : ''}`}
          onClick={this.displayHidden}
          role="button"
        />
        <div className="test__inner test__inner--button">
          <button className="clickable" onClick={this.props.enableNext} type="button">
            <img src={button} alt="" />
          </button>
        </div>
      </div>
    );
  }
}

export default SecretPanel;
