import { createContext } from 'react';
import { PaletteMode } from '@mui/material';

// get colors
export const tokens = (mode: PaletteMode) => ({
  ...(mode === 'dark'
    ? {
        grey: {
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#525252',
          700: '#3d3d3d',
          800: '#292929',
          900: '#141414',
        },
        primary: {
          100: '#d0d1d5',
          200: '#a1a4ab',
          300: '#727681',
          400: '#1F2A40',
          500: '#141b2d',
          600: '#101624',
          700: '#0c101b',
          800: '#080b12',
          900: '#040509',
        },
      }
    : {
        grey: {
          100: '#141414',
          200: '#292929',
          300: '#3d3d3d',
          400: '#525252',
          500: '#666666',
          600: '#858585',
          700: '#a3a3a3',
          800: '#c2c2c2',
          900: '#e0e0e0',
        },
        primary: {
          100: '#040509',
          200: '#080b12',
          300: '#0c101b',
          400: '#f2f0f0', // manually changed
          500: '#141b2d',
          600: '#1F2A40',
          700: '#727681',
          800: '#a1a4ab',
          900: '#d0d1d5',
        },
      }),
});

export const getDesignTokens = (mode: PaletteMode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode,
      ...(mode === 'dark'
        ? {
            background: {
              default: colors.primary[800],
            },
          }
        : {
            background: {
              default: '#ffffff',
            },
          }),
    },
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontSize: 12,
      h1: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        fontSize: 40,
      },
      h2: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        fontSize: 32,
      },
      h3: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        fontSize: 24,
      },
      h4: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        fontSize: 20,
      },
      h5: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        fontSize: 16,
      },
      h6: {
        fontFamily: ['Open Sans', 'sans-serif'].join(','),
        fontSize: 14,
      },
    },
  };
};

type ColorMode = {
  toggleColorMode: () => void;
};

export const ColorModeContext = createContext<ColorMode>({
  toggleColorMode() {},
});
