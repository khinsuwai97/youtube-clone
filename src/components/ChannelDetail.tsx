import { Stack, Box, Typography } from '@mui/material';
import { demoProfilePicture } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ChannelDetailItem, VideoItem } from '../types/videoType';
import Videos from './Videos';

type ChannelDeatilProps = {
  channelDetail: ChannelDetailItem | null;
  videos: VideoItem[];
};

const ChannelDetail = ({ channelDetail, videos }: ChannelDeatilProps) => {
  return (
    <Box minHeight="95vh">
      <Stack>
        <div
          style={{
            width: '100%',
            height: '200px',
            background:
              'linear-gradient(90deg,hsla(339, 100%, 55%, 1) 0%,hsla(197, 100%, 64%, 1) 100%)',
          }}
        ></div>
        <Stack direction="column">
          <Box
            sx={{
              zIndex: '999',
              display: 'flex',
              justifyContent: 'center',
              transform: 'translateY(-30%)',
            }}
          >
            <img
              style={{ borderRadius: '50%' }}
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                demoProfilePicture
              }
              width="150px"
              height="150px"
            />
          </Box>
          <Stack
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            mb={1}
          >
            <Typography variant="h4" fontWeight="bold">
              {channelDetail?.snippet?.title}
            </Typography>
            <Typography>
              <CheckCircleIcon sx={{ fontSize: '15px', marginLeft: '5px' }} />
            </Typography>
          </Stack>

          <Typography variant="h5" textAlign="center">
            {channelDetail?.statistics?.subscriberCount} Subscribers
          </Typography>
        </Stack>

        <Box margin={4} sx={{ overflowY: 'auto', height: '90vh', flex: 1 }}>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default ChannelDetail;
