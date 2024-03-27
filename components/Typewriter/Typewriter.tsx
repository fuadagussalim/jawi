import React, { useState, useEffect } from 'react';

interface TypewriterContentProps {
  content: string;
}

const TypewriterContent: React.FC<TypewriterContentProps> = ({ content }: TypewriterContentProps) => {
  const [displayedContent, setDisplayedContent] = useState('');

  useEffect(() => {
    const typeContent = async () => {
      // Simulate typing effect
      for (let i = 0; i <= content.length; i++) {
        setDisplayedContent(content.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100)); // Adjust typing speed as needed
      }
    };

    typeContent();
  }, [content]);

  return <>{displayedContent}</>;
};

export default TypewriterContent;
