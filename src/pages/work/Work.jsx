import React, { useEffect } from "react";
import "./work.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Left from "../../components/left/Left";
import Right from "../../components/right/Right";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

const Work = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Animate the component to move up from the bottom when it mounts
    controls.start({ y: 0 });
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: window.innerHeight }} // Initial position above the viewport
        animate={controls}
        transition={{
          // type: "spring",
          duration: 0.7,
          damping: 10,
          stiffness: 50,
        }}
        className="work"
      >
        {/* <Sidebar /> */}
        <Left />
        {/* <Right /> */}
      </motion.div>
    </>
  );
};

export default Work;
