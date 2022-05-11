import React from "react";
import { motion } from "framer-motion/dist/es/index";
import "../App.css";
import {Link} from "react-router-dom";

export function Animation() {
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };

  const item2 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 200 },
  };

  const item3 = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -200 },
  };
  const item4 = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 200 },
  };
  return (
    <>
      <div className="App">
        <div className="dots">
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ x: [-300, 0] }}
              transition={{ duration: 3 }}
              variants={item}
              style = {{color:"#D48C70"}}
            ></motion.li>
          </motion.ul>
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ y: [-300, 0] }}
              transition={{ duration: 2 }}
              variants={item2}
              style = {{color:"#F79489"}}
            ></motion.li>
          </motion.ul>
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ x: [300, 0] }}
              transition={{ duration: 3 }}
              variants={item3}
              style={{color:"#B95C50"}}
            ></motion.li>
          </motion.ul>
          <motion.ul initial="hidden" animate="visible" variants={list}>
            <motion.li
              animate={{ y: [-300, 0] }}
              transition={{ duration: 2 }}
              variants={item4}
              style = {{color:"#FADCD9"}}
            ></motion.li>
          </motion.ul>
        </div>
        <motion.img 
          animate={{ y: [-600, -100] }}
          transition={{ duration: 3, delay: 2 }}
          src="/images/logo2.jpeg"
          style={{ width: "500px", height: "135px", marginBottom: 0 }}
        ></motion.img>
        <motion.h5
          className="subhead"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 3, ease: "easeInOut", delay: 3 },
          }}
        >
          Thrift is the new Rift
        </motion.h5>
        <motion.div
          className="button-div"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut", delay: 4},
          }}
        >
          <Link to= "/landingPage" className = "links">
          <button type="button" className="btn btn-danger button">
            Let's thrift
          </button>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
