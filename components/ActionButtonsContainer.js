'use strict';

import React, { Component } from 'react';
import Style from './ActionButtonsStyle';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mouseDown: false
    };

    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  render() {
    const { mouseDown } = this.state;
    const { style = {}, children } = this.props;
    const dynamicStyle = mouseDown ?
    Style.buttonMouseDown : Style.button;

    return (
      <div
        style={{ ...dynamicStyle, ...style }}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseLeave={this.handleMouseUp}>
        {children}
      </div>
    );
  }

  handleMouseDown() {
    this.setState({ mouseDown: true });
  }

  handleMouseUp() {
    this.setState({ mouseDown: false });
  }
}

const ActionButtonsContainer = () => {
  return (
    <div style={Style.container}>
      <LapButton />
      <StartButton />
    </div>
  );
};

const LapButton = () => {
  return (
    <Button>Lap</Button>
  );
};

const StartButton = ({ running = false }) => {
  const props = {
    style: { color: running ? '#FF1E1D' : '#3DD84C' },
    children: running ? 'Stop' : 'Start'
  };

  return (
    <Button {...props} />
  );
};

export default ActionButtonsContainer;
