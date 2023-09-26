import { Link } from 'react-router-dom';
import { VideoItem } from '../types/videoType';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoChannelUrl, demoThumbnailUrl } from '../utils/constants';

type VideoCardProps = {
  video: VideoItem;
};

const VideoCard = ({ video }: VideoCardProps) => {
  const theme = useTheme();
  const textColor = theme.palette.mode === 'dark' ? '#eee' : '#1a1a1a';
  return (
    <Card sx={{ width: { md: '320px', sm: '358px', sx: '100%' } }}>
      <Link
        to={
          video.id.videoId ? `/video/${video.id.videoId}` : `/video/cV2gBU6hKfY`
        }
      >
        <CardMedia
          sx={{ height: 140 }}
          image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          title={video?.snippet?.title}
        />
      </Link>
      <CardContent>
        <Link
          style={{ color: textColor, textDecoration: 'none' }}
          to={
            video.id.videoId
              ? `/video/${video.id.videoId}`
              : `/video/cV2gBU6hKfY`
          }
        >
          <Typography
            gutterBottom
            variant="h5"
            fontWeight="bold"
            component="div"
          >
            {video.snippet.title.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          to={
            video.snippet.channelId
              ? `/channel/${video?.snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="h6" color="text.secondary">
            {video.snippet.channelTitle}
            <CheckCircleIcon sx={{ fontSize: '15px', marginLeft: '5px' }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
