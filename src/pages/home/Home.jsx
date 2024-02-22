import React, { useEffect } from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Left from "../../components/left/Left";
import Right from "../../components/right/Right";
import { motion, useAnimation } from "framer-motion";
import { linkInfo, rightInfo } from "../../constants/index";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0 }); // Start the drop animation when the component mounts
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -window.innerHeight }} // Initial position above the viewport
        animate={controls}
        transition={{
          // type: "spring",
          duration: 0.7,
          damping: 10,
          stiffness: 50,
        }}
        className="home"
      >
        <Sidebar linkInfo={linkInfo} />
        <Left />
        <Right rightInfo={rightInfo} />
      </motion.div>
    </>
  );
};

export default Home;
