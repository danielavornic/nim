import { MotionValue, useTransform } from "framer-motion";

const useLineupAnimation = (scrollYProgress: MotionValue<number>, width: number) => {
  const initialY = width > 2500 ? "450vh" : width > 1900 ? "340vh" : width > 1400 ? "300vh" : "300vh";

  const getTopFinalY = (percentValue: number) => {
    if (width > 2400) return `${percentValue + 30}%`;
    if (width > 1800) return `${percentValue + 18}%`;
    if (width > 1400) return `${percentValue + 8}%`;
    return `${percentValue * 1}%`;
  };

  const getMiddleFinalY = (percentValue: number) => {
    if (width > 2400) return `${percentValue + 100}%`;
    if (width > 1800) return `${percentValue + 44}%`;
    if (width > 1400) return `${percentValue + 20}%`;
    return `${percentValue + 0}%`;
  };

  const getBottomFinalY = (percentValue: number) => {
    if (width > 2400) return `${percentValue + 190}%`;
    if (width > 1800) return `${percentValue + 76}%`;
    if (width > 1400) return `${percentValue + 35}%`;
    return `${percentValue + 0}%`;
  };

  return {
    // Title animations
    titleScaleValue: useTransform(scrollYProgress, [0, 0.2], [1, 0.8]),
    titleOpacityValue: useTransform(scrollYProgress, [0, 0.08], [0.4, 1]),

    // Artist animations - staggered entrance from bottom
    artist1Y: useTransform(scrollYProgress, [0.1, 0.3], [initialY, getTopFinalY(0)]),
    artist2Y: useTransform(scrollYProgress, [0.15, 0.35], [initialY, getTopFinalY(-5)]),
    artist3Y: useTransform(scrollYProgress, [0.2, 0.4], [initialY, getTopFinalY(-11)]),
    artist4Y: useTransform(scrollYProgress, [0.25, 0.45], [initialY, getTopFinalY(-15)]),
    artist5Y: useTransform(scrollYProgress, [0.3, 0.52], [initialY, getTopFinalY(2)]),

    artist6Y: useTransform(scrollYProgress, [0.35, 0.55], [initialY, getMiddleFinalY(55)]),
    artist7Y: useTransform(scrollYProgress, [0.4, 0.6], [initialY, getMiddleFinalY(60)]),
    artist8Y: useTransform(scrollYProgress, [0.45, 0.65], [initialY, getMiddleFinalY(65)]),
    artist9Y: useTransform(scrollYProgress, [0.5, 0.7], [initialY, getMiddleFinalY(60)]),

    artist10Y: useTransform(scrollYProgress, [0.55, 0.75], [initialY, getBottomFinalY(110)]),
    artist11Y: useTransform(scrollYProgress, [0.6, 0.8], [initialY, getBottomFinalY(120)]),
    artist12Y: useTransform(scrollYProgress, [0.65, 0.85], [initialY, getBottomFinalY(128)]),
    artist13Y: useTransform(scrollYProgress, [0.7, 0.9], [initialY, getBottomFinalY(105)]),
    // Add more artists as needed

    // Artist opacity animations
    artist1Opacity: useTransform(scrollYProgress, [0.1, 0.4], [0, 1]),
    artist2Opacity: useTransform(scrollYProgress, [0.4, 0.7], [0, 1]),
    artist3Opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
    artist4Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist5Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist6Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist7Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist8Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist9Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist10Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist11Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist12Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1]),
    artist13Opacity: useTransform(scrollYProgress, [0.9, 1], [0, 1])
  };
};

export default useLineupAnimation;
