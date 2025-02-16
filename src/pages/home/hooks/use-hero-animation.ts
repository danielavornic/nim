import { MotionValue, useTransform } from "framer-motion";

const useHeroAnimation = (scrollYProgress: MotionValue<number>) => {
  return {
    leftLateralXValue: useTransform(scrollYProgress, [0, 0.25, 0.3], ["0%", "-35%", "-160%"]),
    rightLateralXValue: useTransform(scrollYProgress, [0, 0.25, 0.3], ["0%", "35%", "160%"]),
    lateralScaleValue: useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1.5, 3.25]),
    lateralYValue: useTransform(scrollYProgress, [0, 0.25, 0.3], ["10%", "0%", "-90%"]),
    nimRiseValue: useTransform(scrollYProgress, [0, 0.25, 0.3], ["135%", "20%", "-2%"]),
    nimScaleValue: useTransform(scrollYProgress, [0, 0.25, 0.3], [1, 1.1, 1.35])
  };
};

export default useHeroAnimation;
