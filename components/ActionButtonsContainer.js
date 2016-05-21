'use strict';

import React from 'react';
import Style from './ActionButtonsStyle';

const Button = ({ style = {}, children }) => {
  return (
    <div style={{ ...Style.button, ...style }}>
      {children}
    </div>
  );
};

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

const StartButton = ({ running = true }) => {
  const props = {
    style: { color: running ? '#FF1E1D' : '#3DD84C' },
    children: running ? 'Stop' : 'Start'
  };

  return (
    <Button {...props} />
  );
};

export default ActionButtonsContainer;
