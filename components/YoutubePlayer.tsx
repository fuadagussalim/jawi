
import { he } from 'date-fns/locale';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

//Make youtube player autoplay when scroll meet

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

  return ( 
    <LiteYouTubeEmbed
  aspectHeight={9}
  aspectWidth={16}
  id={id}
  title="Site Projek"
/>
  // <YouTube videoId={id} opts={opts} onReady={onPlayerReady} />
  );
}

export default YouTubePlayer;