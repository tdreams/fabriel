import React, { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

const MouseBlurEffect = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!isShown) {
        setIsShown(true);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isShown, x, y]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const moveSpeed = 0.1;

    const moveRandomly = () => {
      const newX = Math.random() * screenWidth;
      const newY = Math.random() * screenHeight;

      x.set((currentX) => currentX + (newX - currentX) * moveSpeed);
      y.set((currentY) => currentY + (newY - currentY) * moveSpeed);

      requestAnimationFrame(moveRandomly);
    };

    let timer;

    if (!isShown) {
      timer = setTimeout(() => {
        moveRandomly();
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isShown, x, y]);

  return (
    <>
      {isShown && (
        <motion.div
          className="fixed inset-0 z-0 hidden lg:block"
          style={{
            width: "2rem",
            height: "2rem",
            pointerEvents: "none",
            filter: "blur(10px)",
            background: "linear-gradient(to right, aquamarine, mediumpurple)",
            mixBlendMode: "screen",
            opacity: "0.8",
            translateX: x,
            translateY: y,
            transition: "transform 0.3s ease-out",
          }}
        ></motion.div>
      )}
    </>
  );
};

export default MouseBlurEffect;
