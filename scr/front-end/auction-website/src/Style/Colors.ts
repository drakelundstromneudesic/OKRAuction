export const BLACK = '#000000'
export const WHITE = '#ffffff'
export const DARK_RED = '#e90000'
export const BURGUNDY = '#77001B'


export const BRIGHT_RED = '#FF001B'
export const ORANGE = '#FF6500'
export const BROWN = '#622700'
export const LIGHT_BROWN = '#D88860'
export const ROYAL_PURPLE = '#580072'
export const NAVY_BLUE = '#001D4D'
export const DARK_NAVY = '#170055'
export const LIGHT_TURQUOISE = '#64E9EE'
export const GOLD = '#FFD700'
export const SILVER = '#C0C0C0'
export const ROYAL_BLUE = '#002366'
export const BURNT_ORANGE = '#CC5500'
export const OFF_WHITE = '#F8F8FF'
export const CREAM = '#FFFDD0'
export const SKY_BLUE = '#87CEEB'
export const NEUTRAL_BLUE = '#3E00FF'
export const LIGHT_GREEN = '#B5FFD9'
export const LIGHT_PURPLE = '#A865C9'

export const GREY = '#CCCCCC'


export const addOpacityToColor = (hexCode: string, opacacy: number): string => hexCode + Math.round(opacacy * 255).toString(16);