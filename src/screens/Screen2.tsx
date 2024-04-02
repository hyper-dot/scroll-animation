import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Screen2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.4, 0.7], [1, 0.5]);

  return (
    <div
      ref={containerRef}
      className="flex items-center h-screen md:h-[300vh] relative w-full"
    >
      <motion.img
        style={{ scale, transformOrigin: "0 0" }}
        src="https://dynamicmedia.accenture.com/is/image/accenture/A1-A.com-Careers-Module-Image?qlt=85&ts=1711641426964&$1024-PNG$&dpr=off"
        className="w-full sticky top-10 object-cover h-auto"
      />
      <div className="h-full bg-red-500"></div>
    </div>
  );
};

export default Screen2;
