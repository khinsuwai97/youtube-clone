import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelDetail from '../ChannelDetail';
import { fetchVideos } from '../../utils/fetchVideos';

import {
  ChannelDetailObj,
  ChannelDetailItem,
  Video,
  VideoItem,
} from '../../types/videoType';

const ChannelPage = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<ChannelDetailItem | null>(
    null
  );

  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    fetchVideos(`channels?part=snippet&id=${id}`).then(
      (data: ChannelDetailObj) => setChannelDetail(data?.items[0])
    );

    fetchVideos(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
      (data: Video) => setVideos(data?.items)
    );
  }, [id]);

  return <ChannelDetail channelDetail={channelDetail} videos={videos} />;
};

export default ChannelPage;
