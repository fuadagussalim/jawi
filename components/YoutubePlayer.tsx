import React from 'react';
import { MotionLeftBTTContainer } from './Motion';

function YouTubePlayer({ id }) {
  const width = '100%'; // Adjust the width as needed
  const height = '0'; // Height is initially set to 0

  return (
<MotionLeftBTTContainer className={""} transition={{ delay: 0.7, duration: 0.5 }}>

    <div style={{ position: 'relative', paddingTop: '56.25%' }}>
      <iframe
        title="Site Projek"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&mute=1&loop=1`}
        frameBorder="0"
        allowFullScreen
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
        />
      
    </div>
        </MotionLeftBTTContainer>
  );
}


export default YouTubePlayer;
