import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Screen2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  /* Right Array side of useTransform is the scroll progress.
   * When scroll value is reaches 0.4 it starts transforming and when it reaches 0.7 it stops
   * Left side array is the value of scale factor. It is from 100% when scroll is 0.4 to 50% when scroll is 0.7
   * */
  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.58], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-black md:h-[300vh] relative w-full"
    >
      <motion.img
        style={{ scale, transformOrigin: "0 0" }}
        src="https://dynamicmedia.accenture.com/is/image/accenture/A1-A.com-Careers-Module-Image?qlt=85&ts=1711641426964&$1024-PNG$&dpr=off"
        className="w-full sticky top-32 object-cover h-auto z-10"
      />
      <div className="grid grid-cols-2 relative top-20">
        <div></div>
        <motion.div
          style={{ opacity }}
          className="md:h-[420px] flex flex-col justify-end"
        >
          <div className="max-w-1/2 mx-auto space-y-4 text-white">
            <h1 className="font-bold">CAREERS</h1>
            <h2 className="text-4xl font-medium text-green-400">
              Grow your career at <br /> the heart of change
            </h2>
            <p className="text-xl">
              It's your time to shine. <br /> Bring your ingenuity, curiosity
              and big ideas.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Screen2;
