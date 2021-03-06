'use strict';

import React from 'react';
import Style from './AppStyle';

import Alarm from './icons/Alarm';
import Stopwatch from './icons/Stopwatch';
import Timer from './icons/Timer';
import WorldClock from './icons/WorldClock';

import {
  CurrentLapContainer,
  TotalTimeElapsedContainer
} from './TimerContainer';

import ActionButtonsContainer from './ActionButtonsContainer';
import LapsContainer from './LapsContainer';

const App = () => {
  return (
      <div style={Style.container}>
        <div style={Style.content}>

        <div style={Style.statusBar} />

        <div style={Style.navigationTitle}>
          Stopwatch
        </div>

        <div style={Style.timerContainer}>
          <CurrentLapContainer />
          <TotalTimeElapsedContainer />
        </div>

        <div style={Style.actionButtonsContainer}>
          <ActionButtonsContainer />
        </div>

        <div style={Style.lapsContainer}>
          <LapsContainer />
        </div>

        <div style={Style.tabBar}>
          {/*<WorldClock />
          <Alarm />
          <Stopwatch />
          <Timer />*/}
        </div>
      </div>
    </div>
  );
};

export default App;
