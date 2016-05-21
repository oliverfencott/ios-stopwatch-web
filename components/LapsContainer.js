'use strict';

import React from 'react';
import _ from 'lodash';

import Style from './LapsStyle';

const lapsData = _.times(40, {});

const LapsContainer = () => {
  return <Laps laps={lapsData} />;
};

const Laps = ({ laps }) => {
  return (
    <div style={Style.lapsContainer}>
      {laps.map(renderLap)}
    </div>
  );
};

function renderLap(lap, index) {
  return (
    <div key={index} style={Style.lapItem}>
      Lap {index + 1}
    </div>
  );
}
export default LapsContainer;
