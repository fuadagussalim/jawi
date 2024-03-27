import React, { useState, useEffect } from 'react';

interface TypewriterContentProps {
  content: string;
}

const TypewriterContent: React.FC<TypewriterContentProps> = ({
  content,
}: TypewriterContentProps) => {
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate typewriter effect
      setText((prevText) =>
        prevText.length === content.length ? prevText : content.substring(0, prevText.length + 1)
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, [content]);

  return <div>{text}</div>;
};

export default TypewriterContent;
