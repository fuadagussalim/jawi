import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function Index() {
  const [initialPath, setInitialPath] = useState("");
  const [targetPath, setTargetPath] = useState("");

  useEffect(() => {
    const initialPathValue = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPathValue = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    setInitialPath(initialPathValue);
    setTargetPath(targetPathValue);

    const handleResize = () => {
      const newTargetPathValue = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;
      setTargetPath(newTargetPathValue);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const pathVariants = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath
    },
    exit: {
      d: initialPath
    }
  };

  return (
    <svg className={styles.svgCurve}>
      <motion.path
        variants={pathVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
}