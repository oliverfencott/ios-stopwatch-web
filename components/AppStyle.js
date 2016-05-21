'use strict';

const SYSTEM_BACKGROUND_COLOR = '#F7F7F7';
const BORDER = '1px solid rgba(0, 0, 0, 0.3)';

const Style = {
  container: {
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
    backgroundColor: SYSTEM_BACKGROUND_COLOR,
  },
  navigationTitle: {
    backgroundColor: SYSTEM_BACKGROUND_COLOR,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 500,
    height: 'calc(6.5% - 1px)',
    borderBottom: BORDER
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
    backgroundColor: '#F0F0F0',
    height: '40.5%',
    overflow: 'scroll'
  },
  tabBar: {
    height: 'calc(6% - 1px)',
    backgroundColor: SYSTEM_BACKGROUND_COLOR,
    borderTop: BORDER,
    display: 'flex',
    justifyContent: 'space-between'
  }
};

export default Style;
