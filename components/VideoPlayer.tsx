import { useEffect, useRef } from 'react';

export default function VideoPlayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <div>
      <video ref={videoRef} width="100%" height="auto" autoPlay loop muted>
        <source src="https://www.youtube.com/embed/LBCGzeuQkHc?si=VxjCDXQbJBZQEBcj" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}