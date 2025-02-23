import { MotionValue, motion } from "framer-motion";
import useHeroAnimation from "../hooks/use-hero-animation";

const HeroGraphics = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
  const { leftLateralXValue, rightLateralXValue, lateralScaleValue, lateralYValue, nimRiseValue, nimScaleValue } =
    useHeroAnimation(scrollYProgress);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 1.5
      }
    }
  };

  return (
    <div className="absolute right-0 bottom-0 left-0 z-[2] lg:flex lg:items-end lg:justify-between">
      <div className="blurred-mask absolute right-0 bottom-0 z-[1] h-[100dvh] w-[20vw]" />
      <div className="blurred-mask-left absolute bottom-0 left-0 z-[1] h-[100dvh] w-[20vw]" />
      <motion.div
        style={{
          scale: lateralScaleValue,
          translateX: leftLateralXValue,
          translateY: lateralYValue
        }}
        className="transition-all duration-300"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <img src="/images/hero-lateral.webp" alt="Hero Lateral" className="scale-x-[-1]" />
      </motion.div>
      <motion.div
        style={{
          scale: nimScaleValue,
          translateY: nimRiseValue
        }}
        className="flex-shrink-0 transition-all duration-300"
      >
        <img
          src="/images/hero-nim.svg"
          alt="Hero NIM"
          className="3xl:!w-[550px] 4xl:!w-[1000px] 1.5xl:w-[500px] w-[400px] flex-shrink-0 2xl:w-[480px]"
        />
      </motion.div>
      <motion.div
        style={{
          scale: lateralScaleValue,
          translateX: rightLateralXValue,
          translateY: lateralYValue
        }}
        className="transition-all duration-300"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <img src="/images/hero-lateral.webp" alt="Hero Lateral" />
      </motion.div>
    </div>
  );
};

export default HeroGraphics;
