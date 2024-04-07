import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const MotionLeftBTTContainer = ({ children, transition, className="" }) => {
    // Motion Bottom to Top
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const elementVariants = {
        hidden: { opacity: 0, x: -60, y:0},
        visible: { opacity: 1, x: 0, y:0 }
    };

    return (
        <motion.div
            className={className}
            variants={elementVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={transition}
            ref={ref}
        >
            {children}
        </motion.div>
    );
};
