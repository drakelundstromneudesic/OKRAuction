import {
    BLACK,
    BRIGHT_RED,
    BROWN,
    BURGUNDY,
    BURNT_ORANGE,
    CREAM,
    DARK_NAVY,
    GOLD,
    GREY,
    LIGHT_GREEN,
    LIGHT_TURQUOISE,
    NEUTRAL_BLUE,
    OFF_WHITE, ROYAL_BLUE, ROYAL_PURPLE, SILVER, WHITE,

  } from '../colors';

import { Theme } from './Theme';
export const darkBlueTheme = () : Theme => ({
    name : 'DarkBlueTheme',
  background: {
    layerOne: DARK_NAVY,
    layerTwo: ROYAL_BLUE,
    layerThree: ROYAL_PURPLE,
    layerFour: NEUTRAL_BLUE,
  },
  heading: {
    primary: GOLD,
    secondary: SILVER,
  },
  text: {
    primary: CREAM,
    secondary: LIGHT_GREEN,
    tertiary: BROWN,
    quaternary: BURNT_ORANGE,
    negative: BRIGHT_RED,
  },

  button: {
    border: {
      primary: OFF_WHITE,
      secondary: BLACK,
      negative: BURGUNDY,
    },
    text: {
      primary: OFF_WHITE,
      secondary: BLACK,
      negative: WHITE,
    },
    background: {
      primary: ROYAL_PURPLE,
      secondary: LIGHT_TURQUOISE,
      negative: BRIGHT_RED,
    },
  },

  common: {
    black: BLACK,
    white: WHITE,
    grey: GREY,
  },
})