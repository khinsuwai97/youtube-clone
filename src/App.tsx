import { useState, useMemo } from 'react';
import {
  CssBaseline,
  ThemeProvider,
  PaletteMode,
  createTheme,
} from '@mui/material';
import Pages from './components/pages/Pages';
import { getDesignTokens, ColorModeContext } from './themeColor';

const App = () => {
  const [mode, setMode] = useState<PaletteMode>('dark');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'dark' ? 'light' : 'dark'
        );
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Pages />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
