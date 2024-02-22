import React, { useEffect } from "react";
import "./right.scss";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Right = ({ rightInfo }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1, // Animate opacity to 1 for full visibility
      filter: "blur(0px)", // Animate blur to 0px for no blur
    });
  }, [controls]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/work`);
  };

  return (
    <>
      <div className="right">
        <motion.div
          animate={controls}
          initial={{ opacity: 0, filter: "blur(30px)" }}
          transition={{ delay: 0.8, duration: 1 }} // Animation duration (adjust as needed)
          className="right_container"
        >
          {rightInfo.map((item, idx) => (
            <div key={idx} className="text" onClick={handleClick}>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Right;
