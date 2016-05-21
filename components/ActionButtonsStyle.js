'use strict';

const BUTTON_DIMENSIONS = 74;

const container = {
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const button = {
  width: BUTTON_DIMENSIONS,
  height: BUTTON_DIMENSIONS,
  backgroundColor: '#FFFFFF',
  borderRadius: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer'
};

const buttonMouseDown = {
  ...button,
  backgroundColor: 'rgba(0, 0, 0, .54)'
};

const Style = { container, button, buttonMouseDown };

export default Style;
