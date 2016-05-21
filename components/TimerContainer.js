'use strict';

import React from 'react';
import Style from './TimerStyle';

const CurrentLapContainer = () => {
  return (
    <div style={Style.currentLap}>
      00:00.00
    </div>
  );
};

const TotalTimeElapsedContainer = () => {
  return (
    <div style={Style.totalTimeElapsed}>
      00:00.00
    </div>
  );
}

export { CurrentLapContainer, TotalTimeElapsedContainer };
