import React, { useRef, useEffect } from 'react';

const ScrollAppearLine = () => {
  const lineRef = useRef(null);
  const [isVisible, setVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (lineRef.current) {
      observer.observe(lineRef.current);
    }
    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return <hr ref={lineRef} style={{ opacity: isVisible ? 1 : 0 }} />;
};

export default ScrollAppearLine;