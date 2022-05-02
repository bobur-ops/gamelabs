export const COLORS_NAMES = {
  PURPLE: 'purple',
  LIGHT: 'light',
  LIGHT_GREY: 'light_grey',
  GREY: 'grey',
  WHITE: 'white',
} as const

export const TYPOGRAPY_COLORS = {
  [COLORS_NAMES.PURPLE]: '#8274F7',
  [COLORS_NAMES.LIGHT]: '#D2D3D4',
  [COLORS_NAMES.LIGHT_GREY]: '#ffffffb3',
  [COLORS_NAMES.GREY]: '#ffffff4d',
  [COLORS_NAMES.WHITE]: '#ffffff',
} as const

export const GRADIENTS_NAMES = {
  BLUE_TO_PURPLE: 'blue_to_purple',
  PURPLE_TO_BLUE_111_DEG: 'purple_to_blue_111_deg',
} as const

export const TYPOGRAPY_GRADIENTS = {
  [GRADIENTS_NAMES.BLUE_TO_PURPLE]:
    'linear-gradient(89.88deg, #5C8FFF 21.24%, #C14BFF 95.11%)',
  [GRADIENTS_NAMES.PURPLE_TO_BLUE_111_DEG]:
    'linear-gradient(115.56deg, rgba(142, 45, 226, 0.8) 0%, rgba(51, 133, 255, 0.8) 100.01%)',
} as const
