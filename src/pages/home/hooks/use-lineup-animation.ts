import { MotionValue, useTransform } from "framer-motion";

const useLineupAnimation = (scrollYProgress: MotionValue<number>) => {
  return {
    // Title animations
    titleScaleValue: useTransform(scrollYProgress, [0, 0.3], [1, 0.8]),
    titleOpacityValue: useTransform(scrollYProgress, [0, 0.3], [1, 0]),

    // Artist animations - staggered entrance
    artist1Y: useTransform(scrollYProgress, [0.1, 0.4], ["100%", "0%"]),
    artist2Y: useTransform(scrollYProgress, [0.15, 0.45], ["100%", "-105%"]),
    artist3Y: useTransform(scrollYProgress, [0.2, 0.5], ["100%", "-200%"]),
    artist4Y: useTransform(scrollYProgress, [0.25, 0.55], ["100%", "-305%"]),
    artist5Y: useTransform(scrollYProgress, [0.3, 0.62], ["100%", "-415%"]),

    artist6Y: useTransform(scrollYProgress, [0.35, 0.65], ["100%", "-445%"]),
    artist7Y: useTransform(scrollYProgress, [0.4, 0.7], ["100%", "-535%"]),
    artist8Y: useTransform(scrollYProgress, [0.45, 0.75], ["100%", "-635%"]),
    artist9Y: useTransform(scrollYProgress, [0.5, 0.8], ["100%", "-745%"]),

    artist10Y: useTransform(scrollYProgress, [0.55, 0.85], ["100%", "-775%"]),
    artist11Y: useTransform(scrollYProgress, [0.6, 0.9], ["100%", "-865%"]),
    artist12Y: useTransform(scrollYProgress, [0.65, 0.95], ["100%", "-970%"]),
    artist13Y: useTransform(scrollYProgress, [0.7, 0.99], ["100%", "-1090%"]),
    // Add more artists as needed

    // Artist opacity animations
    artistOpacityRow1: useTransform(scrollYProgress, [0.1, 0.5], [0, 1]),
    artistOpacityRow2: useTransform(scrollYProgress, [0.5, 0.9], [0, 1]),
    artistOpacityRow3: useTransform(scrollYProgress, [0.9, 1], [0, 1])
  };
};

export default useLineupAnimation;
