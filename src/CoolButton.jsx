import React from 'react';

export default class CoolButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickFunction}>{this.props.buttonText}</button>
    );
  }
}
