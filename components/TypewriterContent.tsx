import type { ReactNode } from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterContentProps {
  content: string;
}

const TypewriterContent: React.FC<TypewriterContentProps> = ({
  content,
}: TypewriterContentProps) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(<Typewriter options={{ autoStart: true }}>{content}</Typewriter>), 0);
  });

export default TypewriterContent;