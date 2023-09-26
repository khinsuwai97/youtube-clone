import { useEffect, useState } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import Sidebar from '../Sidebar';
import Videos from '../Videos';
import { fetchVideos } from '../../utils/fetchVideos';
import { VideoItem, Video } from '../../types/videoType';

const HomePage = () => {
  const [selected, setSelected] = useState('New');
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    fetchVideos(`search?part=snippet&q=${selected}`).then((data: Video) =>
      setVideos(data.items)
    );
  }, [selected]);

  return (
    <Stack
      sx={{ flexDirection: { md: 'row', xs: 'column' } }}
      justifyContent="start"
    >
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid rgb(61,61,61)',
        }}
      >
        <Sidebar selected={selected} setSelected={setSelected} />
      </Box>
      <Box margin={2} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}>
        <Typography variant="h2" fontWeight="bold">
          {selected} <span style={{ color: '#ab003c' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default HomePage;
