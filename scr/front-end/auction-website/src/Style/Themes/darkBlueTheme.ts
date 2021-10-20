

import { DARK_NAVY, ROYAL_BLUE, ROYAL_PURPLE, NEUTRAL_BLUE, 
  GOLD, SILVER, CREAM, LIGHT_GREEN, BROWN, BURNT_ORANGE, 
  BRIGHT_RED, OFF_WHITE, BLACK, BURGUNDY, WHITE, LIGHT_TURQUOISE, GREY, LIGHT_BROWN } from '../Colors';

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
    secondary: GREY,
    tertiary: LIGHT_BROWN,
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