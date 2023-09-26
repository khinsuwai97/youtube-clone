import { useContext } from 'react';
import { Stack, useTheme, IconButton } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';
import { logo } from '../utils/constants';
import SearchBar from './SearchBar';
import { ColorModeContext } from '../themeColor';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        justifyContent: 'space-between',

        position: 'sticky',
        top: 0,
        zIndex: 1000,
        bgcolor:
          theme.palette.mode === 'dark'
            ? 'rgba(8,11,18,1)'
            : 'rgba(255,255,255,0.97)',
        boxShadow: '0 1.2rem 3.2rem rgba(0, 0, 0, 0.03)',
      }}
    >
      <Link to="/" style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <Stack direction="row" spacing={1}>
        <SearchBar />

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
