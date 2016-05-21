'use strict';

const Style = {
  container: {
    fontFamily: 'BlinkMacSystemFont',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  content: {
    width: 375,
    height: 667,
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  statusBar: {
    height: '2.5%',
    backgroundColor: '#F0F0F0',
  },
  navigationTitle: {
    backgroundColor: '#F7F7F7',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    height: '6.5%',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
  },
  timerContainer: {
    height: '25%',
    padding: '0 48px 12px',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  actionButtonsContainer: {
    backgroundColor: '#F0F0F0',
    height: '17.5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  lapsContainer: {
    height: '48.5%',
    backgroundColor: 'teal',
    overflow: 'scroll'
  }
};

export default Style;
