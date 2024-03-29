
import { he } from 'date-fns/locale';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

function YouTubePlayer({id, width, height}) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: `${height}`,
    width: `${width}`,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />;
}

export default YouTubePlayer;