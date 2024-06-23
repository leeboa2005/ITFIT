import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import SkeletonBox from './Skeleton/Box';

const VideoContainer = styled.div`
  position: relative;
  width: ${(props) => props.width || '520px'};
  height: ${(props) => props.height || '285px'};

  iframe {
    width: 100%;
  }
`;

function VideoDisplay({ videoId, width = '520px', height = '285px' }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <VideoContainer width={width} height={height}>
      {isLoading && <SkeletonBox />}
      <YouTube
        videoId={videoId}
        opts={{
          playerVars: {
            rel: 0,
            modestbranding: 1
          },
          width,
          height
        }}
        onReady={() => setIsLoading(false)}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </VideoContainer>
  );
}

export default VideoDisplay;
