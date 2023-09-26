import CircularProgress from '@mui/material/CircularProgress';
import { Box, Stack } from '@mui/material';

const Loader = () => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default Loader;
