import { Variants } from "framer-motion";

interface FadeUpVariantsOptions {
  y?: number;
  duration?: number;
  delay?: number;
  staggerChildren?: number;
}

export const createFadeUpVariants = ({
  y = 50,
  duration = 0.5,
  delay = 0,
  staggerChildren = 0
}: FadeUpVariantsOptions = {}): Variants => ({
  hidden: {
    opacity: 0,
    y
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
      ...(staggerChildren > 0 && {
        delayChildren: delay,
        staggerChildren
      })
    }
  }
});

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};
