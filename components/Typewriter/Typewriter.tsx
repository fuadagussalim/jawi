import React from "react";
import {Typewriter} from "react-simple-typewriter";

interface TypewriterContentProps {
  content: string;
}

const TypewriterContent: React.FC<TypewriterContentProps> = ({
  content,
}) => {
  return (
    <span>
      <Typewriter
        words={[content]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={75}
      />
    </span>
  );
};
export{}
// export default TypewriterContent;