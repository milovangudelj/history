"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

import { NavLink } from "./nav-link";

export const MobileNav = ({
  links,
}: {
  links: { href: string; label: string }[];
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((s) => !s);
  };

  const list: Variants = {
    open: {
      display: "flex",
      opacity: 1,
      transition: {
        when: "beforeChildren",
        type: "tween",
        duration: 0.2,
        staggerChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        type: "tween",
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const item: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      x: -24,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };

  return (
    <div className="sm:pointer-events-none sm:invisible sm:hidden sm:select-none">
      <div
        onClick={toggleMenu}
        className="relative z-10 space-y-2 p-1.5 md:hidden"
      >
        <span
          className={`block h-0.5 w-8 origin-center bg-current transition-all will-change-transform ${
            menuOpen ? "translate-y-[5px] rotate-45" : "transform"
          }`}
        ></span>
        <span
          className={`block h-0.5 w-8 origin-center bg-current transition-all will-change-transform ${
            menuOpen ? "-translate-y-[5px] -rotate-45" : "transform"
          }`}
        ></span>
      </div>
      <motion.ul
        initial={"closed"}
        animate={menuOpen ? "open" : "closed"}
        variants={list}
        className="absolute w-full h-[calc(100svh-48px-2px-37px-100%)] bg-zinc-950 border-t flex flex-col items-end justify-center p-3 gap-6 border-white/[0.06] top-full right-0"
      >
        {links.map((link) => (
          <motion.li variants={item} key={link.href}>
            <NavLink href={link.href}>{link.label}</NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
