import { MotionValue, useTransform } from "framer-motion";

const useHeroAnimation = (scrollYProgress: MotionValue<number>) => {
  return {
    leftLateralXValue: useTransform(scrollYProgress, [0, 0.35], ["2%", "-70%"]),
    rightLateralXValue: useTransform(scrollYProgress, [0, 0.35], ["-2%", "70%"]),
    lateralScaleValue: useTransform(scrollYProgress, [0, 0.35], [1.1, 2]),
    lateralYValue: useTransform(scrollYProgress, [0, 0.35], ["10%", "-35%"]),
    nimRiseValue: useTransform(scrollYProgress, [0, 0.35], ["135%", "-2%"]),
    nimScaleValue: useTransform(scrollYProgress, [0, 0.35], [1, 1.35])
  };
};

export default useHeroAnimation;
