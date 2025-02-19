import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useLineupAnimation from "../hooks/use-lineup-animation";
import ArtistFlag from "./artist-flag";
import { ARTISTS, LINEUP_ARTISTS } from "../constants/artists";

const LineUpSectionMobile = () => {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-4">
        <h2 className="bg-[linear-gradient(180deg,#00FBA2_0%,#00FBA2_18%,#8CFF6D_31%,#00FBA2_49%,#00FBA2_83%)] bg-clip-text text-center text-[180px] leading-[136px] font-[900] text-transparent uppercase sm:leading-[158px] lg:text-[220px] lg:leading-[200px]">
          Line
          <br className="sm:hidden" />
          Up
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 lg:mt-20 lg:gap-16">
          {ARTISTS.map((artist, index) => (
            <div
              key={artist.name}
              className={cn("relative flex justify-center", {
                "md:justify-start": index % 2 === 1,
                "md:justify-end": index % 2 === 0
              })}
            >
              <ArtistFlag
                key={artist.name}
                artist={artist}
                className="max-w-lg:active:scale-[105%] hover:scale-[105%]"
              />
            </div>
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
  "left-[39vw] 3xl:!left-[40vw] 4xl:!left-[42vw]",
  "right-[18vw] 2xl:right-[26vw] 3xl:!right-[28vw]",
  "right-[3.5vw] 2xl:right-[12vw] 3xl:!right-[16vw] 4xl:right-[13vw]",

  "left-[6.5vw] 3xl:!left-[12vw]",
  "left-[21vw] 3xl:!left-[26vw]",
  "right-[21vw] 3xl:!right-[24vw] 4xl:!right-[26vw]",
  "right-[7vw] 3xl:!right-[11vw]",

  "left-[10vw] 2xl:left-[18vw] 3xl:!left-[18vw]",
  "left-[25vw] 2xl:left-[32vw] 3xl:!left-[35vw] 4xl:!left-[35vw]",
  "right-[26vw] 2xl:right-[32vw] 3xl:!right-[32vw]",
  "right-[12vw] 2xl:right-[18vw] 3xl:!right-[18vw]"
];

const LineUpSectionDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const animations = useLineupAnimation(scrollYProgress, width ?? 0);

  return (
    <div ref={containerRef} className="relative h-[220vh]">
      <motion.section className="bg-background sticky top-0 z-10 h-[100dvh]">
        <motion.h2 className="1.5xl:!text-[20vw] 1.5xl:top-[55%] absolute top-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,#00FBA2_0%,#00FBA2_18%,#8CFF6D_31%,#00FBA2_49%,#00FBA2_83%)] bg-clip-text text-center text-[18vw] leading-[0.8] font-[900] tracking-tighter text-transparent uppercase 2xl:!text-[22vw]">
          Line
          <br />
          Up
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
