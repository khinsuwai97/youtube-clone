import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReactPlayer from 'react-player';
import Videos from './Videos';
import Loader from './Loader';
import { fetchVideos } from '../utils/fetchVideos';
import {
  VideoDetailObj,
  VidoeDetailItem,
  VideoItem,
  Video,
} from '../types/videoType';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState<VidoeDetailItem | null>(null);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetchVideos(`videos?part=snippet,statistics&id=${id}`).then(
      (data: VideoDetailObj) => setVideoDetail(data.items[0])
    );

    fetchVideos(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data: Video) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  return (
    <Box minHeight="90vh" margin={4}>
      <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '85px' }} mb={2}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoDetail.id}`}
              className="react-player"
            />

            <Typography variant="h2" mt={2}>
              {videoDetail.snippet.title}
            </Typography>

            <Stack
              direction="row"
              justifyContent="space-between"
              gap={1}
              mt={2}
            >
              <Link to={`/channel/${id}`} style={{ textDecoration: 'none' }}>
                <Typography variant="h5" color="text.secondary">
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: '15px', marginLeft: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap={2}>
                <Typography color="text.secondary" variant="h5">
                  {videoDetail?.statistics?.viewCount} views
                </Typography>
                <Typography color="text.secondary" variant="h5">
                  {videoDetail?.statistics?.likeCount} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box>
          <Videos videos={videos} detail={true} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
