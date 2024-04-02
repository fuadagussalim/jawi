import React, { useRef, useEffect } from 'react';
import YouTube from 'react-youtube';

const AutoPlayYT = ({ videoId, width, height }: { videoId: string; width: number; height: number }) => {
  const playerRef = useRef<YouTube | null>(null); // Define the type of playerRef

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const player = playerRef.current?.getInternalPlayer();
          if (player) {
            // When the element is intersecting (i.e., visible on the screen),
            // play the video
            player.playVideo();
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // 50% of the element is visible
      }
    );

    observer.observe(playerRef.current as unknown as Element);

    // Clean up the observer when the component is unmounted
    return () => {
      observer.unobserve(playerRef.current as unknown as Element);
    };
  }, []);

  return (
    <div>
      <YouTube
        videoId={videoId}
        opts={{
          width: width,
          height: height,
          playerVars: {
            autoplay: 0, // Disable autoplay by default
          },
        }}
        ref={(ref) => (playerRef.current = ref)} // Assign the ref to playerRef.current
      />
    </div>
  );
};

export default AutoPlayYT;
