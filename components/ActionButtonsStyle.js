'use strict';

const PADDING = 21;
const BUTTON_DIMENSIONS = 74;
const containerHeight = (PADDING * 2) + (BUTTON_DIMENSIONS * 2);

const Style = {
  container: {
    flex: 1,
    // height: containerHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // padding: `${PADDING}px 0`
  },
  button: {
    width: BUTTON_DIMENSIONS,
    height: BUTTON_DIMENSIONS,
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
};

export default Style;
