import { animate, useMotionValue, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

type InfiniteCarouselProps = {
  children?: React.ReactNode;
  duration?: number;
};

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  children,
  duration,
}) => {
  const [ref, bounds] = useMeasure();
  const xTranslation = useMotionValue(0);
  if (!duration) duration = 15;
  
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, serRerender] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(duration);

  useEffect(() => {
    if (!bounds.width) return;
    const distance = -bounds.width / 2 - 8;
    let animationControls;
    if (mustFinish) {
      animationControls = animate(xTranslation, [xTranslation.get(), distance], {
        ease: "linear",
        duration: currentDuration * (1 - xTranslation.get() / distance),
        onComplete: () => {
          setMustFinish(false);
          serRerender(!rerender);
        }
      });
    }
    else{
      animationControls = animate(xTranslation, [0, distance], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }
    return animationControls.stop;


  }, [bounds.width, xTranslation, rerender, mustFinish, currentDuration]);

  return (
    <div className="relative w-full h-96 py-10 overflow-hidden">
      {/* Mgła na krawędziach */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background via-transparent to-transparent z-10 pointer-events-none" />
      
      <motion.div
      onHoverStart={() => {
        setMustFinish(true);
        setCurrentDuration(duration * 3);
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setCurrentDuration(duration);
      }}
        className="flex gap-4 absolute left-0"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {React.Children.map(children, (child, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
