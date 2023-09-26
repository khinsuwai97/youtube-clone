import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { fetchVideos } from '../../utils/fetchVideos';
import Videos from '../Videos';
import { Video, VideoItem } from '../../types/videoType';

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    fetchVideos(
      `search?q=${searchTerm}&part=snippet&regionCode=US&maxResults=50&order=date`
    ).then((data: Video) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <Box
      m={4}
      sx={{
        overflowY: 'auto',
        height: '90vh',
        flex: 1,
      }}
    >
      <Typography variant="h2" fontWeight="bold">
        Search Results for{' '}
        <span style={{ color: '#ab003c' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchPage;
