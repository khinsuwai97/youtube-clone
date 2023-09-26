import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import { VideoItem } from '../types/videoType';
import Loader from './Loader';

type VideosProps = {
  videos: VideoItem[];
  detail?: boolean;
};

const Videos = ({ videos, detail }: VideosProps) => {
  if (videos?.length === 0) {
    return <Loader />;
  }

  return (
    <Stack
      marginTop={4}
      flexDirection={detail ? 'column' : 'row'}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="center"
      gap={4}
      flexGrow={1}
    >
      {videos?.map((video, index) => {
        return (
          <Box key={index}>
            {video.id.videoId && <VideoCard video={video} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
