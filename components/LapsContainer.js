'use strict';

import React from 'react';
import _ from 'lodash';

import Style from './LapsStyle';

const lapsData = _.times(7, {});

const LapsContainer = () => {
  return <Laps laps={lapsData} />;
};

const Laps = ({ laps }) => {
  return (
    <div style={Style.lapsContainer}>
      {laps.map(renderLap).reverse()}
    </div>
  );
};

function renderLap(lap, index) {
  return (
    <div key={index} style={Style.lapItem}>
      <div style={Style.lapItemLabel}>
        Lap {index + 1}
      </div>

      <div style={Style.lapItemTime}>
        00:00.00
      </div>
    </div>
  );
}
export default LapsContainer;
