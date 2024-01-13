import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "./Menu";
import { menuAnim, nav } from "../scripts/anim";

const menu = [
  { name: "index", link: "/" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "mailto:amangouakacouange@gmail.com" },
  { name: "Blog", link: "#blog" },
];

export const Nav = () => {
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    setisActive(isActive);
  }, []);
  return (
    <div className="border-b fixed z-50 left-0 right-0 top-0 bg-white">
      <div className="wrapper flex justify-between items-center h-20">
        <div className="logo text-logo font-black capitalize">
          <a href="/" className="p-0 m-0">
            AKA
            <span className="text-red text-big px-0 animate-bounce absolute bottom-1">
              .
            </span>
          </a>
        </div>
        <AnimatePresence initial={false}>
          <motion.div
            variants={menuAnim}
            animate={isActive ? "open" : "exit"}
            initial="closed"
            className="nav"
          >
            <Menu isActive={isActive} setisActive={setisActive} />
            {isActive && (
              <ul className="navLinks flex flex-col items-start justify-center text-white h-full px-10 gap-5">
                {menu.map((link, i) => (
                  <motion.li
                    variants={nav}
                    animate="open"
                    exit="exit"
                    initial="initial"
                    custom={i}
                    key={i}
                    className="text-3xl "
                  >
                    <a href={link.link}> {link.name}</a>
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
