import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { LINEUP_ARTISTS, MOBILE_LINEUP_ARTISTS } from "../constants/artists";
import useLineupAnimation from "../hooks/use-lineup-animation";
import ArtistFlag from "./artist-flag";

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};
const LineUpSectionMobile = () => {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          className="bg-[linear-gradient(180deg,#00FBA2_0%,#00FBA2_18%,#8CFF6D_31%,#00FBA2_49%,#00FBA2_83%)] bg-clip-text text-center text-[180px] leading-[0.85] font-[950] tracking-[-0.04em] text-transparent uppercase sm:leading-[158px] lg:text-[220px] lg:leading-[200px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          Line
          <br className="sm:hidden" />
          Up
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-5 md:mt-16 md:gap-6 lg:mt-20 lg:gap-16">
          {MOBILE_LINEUP_ARTISTS.map((artist, index) => (
            <motion.div
              key={artist.name}
              className={cn("relative flex justify-center", {
                "md:justify-start": index % 2 === 1,
                "md:justify-end": index % 2 === 0
              })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              {/* <div className="w-full"> */}
              <ArtistFlag
                key={artist.name}
                artist={artist}
                className="max-w-lg:active:scale-[105%] hover:scale-[105%]"
              />
              {/* </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const baseFlagClassName =
  "scale-[45%] transition-all transform-gpu origin-center duration-300 hover:scale-[50%] 1.5xl:!scale-[56%] 1.5xl:hover:!scale-[61%] 2xl:scale-[52%] 2xl:hover:scale-[57%] 3xl:!scale-[71%] 3xl:hover:!scale-[75%] 4xl:!scale-100 4xl:hover:!scale-[105%]";
const baseMotionClassName = "absolute transition-all ease-out";

const horizontalPositionsClassNames = [
  "left-[3.5vw] 2xl:left-[11vw] 3xl:!left-[11vw]",
  "left-[20vw] 2xl:left-[26vw] 3xl:!left-[26vw]",
  "left-[39vw] 3xl:!left-[40vw] 4xl:!left-[41vw]",
  "right-[18vw] 2xl:right-[26vw] 3xl:!right-[25vw]",
  "right-[3.5vw] 2xl:right-[12vw] 3xl:!right-[10vw] 4xl:right-[13vw]",

  "left-[6.5vw] 3xl:!left-[8vw]",
  "left-[21vw] 3xl:!left-[22vw]",
  "right-[16vw] 3xl:!right-[22vw] 4xl:!right-[26vw]",
  "right-[3vw] 3xl:!right-[7vw]",

  "left-[8vw] 2xl:left-[14vw] 3xl:!left-[12vw]",
  "left-[24vw] 2xl:left-[28vw] 3xl:!left-[28vw] 4xl:!left-[35vw]",
  "right-[35vw] 2xl:right-[35vw] 3xl:!right-[40vw]",
  "right-[19vw] 2xl:right-[20vw] 3xl:!right-[25vw]",
  "right-[2.5vw] 2xl:right-[3.5vw] 3xl:!right-[9vw]"
];

const LineUpSectionDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const animations = useLineupAnimation(scrollYProgress, width ?? 0);

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div ref={containerRef} className="relative h-[220vh]">
      <motion.section className="bg-background sticky top-0 z-10 h-[100dvh]">
        <motion.h2
          className="1.5xl:!text-[20vw] 1.5xl:top-[48%] absolute top-[380px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,#00FBA2_0%,#00FBA2_18%,#8CFF6D_31%,#00FBA2_49%,#00FBA2_83%)] bg-clip-text text-center text-[20vw] font-[950] tracking-[-0.04em] text-transparent uppercase 2xl:!text-[22vw] 2xl:!leading-[0.88]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
        >
          <span className="block leading-[0.85]">Line</span>
          <span className="-mt-5 block leading-[0.85] 2xl:-mt-12">Up</span>
        </motion.h2>

        <div className="relative inset-0">
          {LINEUP_ARTISTS.map((artist, index) => (
            <motion.div
              key={artist.name}
              style={{
                translateY: animations[`artist${index + 1}Y` as keyof typeof animations]
              }}
              className={cn(baseMotionClassName, horizontalPositionsClassNames[index])}
            >
              <ArtistFlag artist={artist} className={cn(baseFlagClassName)} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

const LineUpSection = () => {
  const { width } = useWindowSize();
  const isMobile = width && width < 1280;

  return isMobile ? <LineUpSectionMobile /> : <LineUpSectionDesktop />;
};

export default LineUpSection;
