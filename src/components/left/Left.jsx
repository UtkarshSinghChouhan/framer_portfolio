import React from "react";
import "./left.scss";
import { cvLink } from "../../constants/index";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <>
      <div className="left">
        <div className="detail">
          <motion.h3
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.84, duration: 0.4 }}
          >
            Utkarsh
            <br /> Singh Chouhan.
          </motion.h3>
          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.84, duration: 0.5 }}
          >
            frontend developer / coding enthusiast / <br /> efficient problem
            solver.
          </motion.p>

          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.84, duration: 0.6 }}
          >
            Constantly learning and exploring new technologies. <br /> Passion
            for creating visually appealing web applications.
          </motion.p>

          <motion.p
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.84, duration: 0.7 }}
            id="cv"
          >
            {" "}
            <a a href={cvLink}>
              Download CV
            </a>
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Left;
