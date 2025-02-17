import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import useLineupAnimation from "../hooks/use-lineup-animation";
import ArtistFlag from "./artist-flag";
import { ARTISTS } from "../constants/artists";

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
              <ArtistFlag key={artist.name} artist={artist} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const baseMotionClassName = "scale-[46%] 1.5xl:scale-[55%] 3xl:scale-70";
const LineUpSectionDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const {
    artist1Y,
    artist2Y,
    artist3Y,
    artist4Y,
    artist5Y,
    artist6Y,
    artist7Y,
    artist8Y,
    artist9Y,
    artist10Y,
    artist11Y,
    artist12Y,
    artist13Y,
    artistOpacityRow1,
    artistOpacityRow2,
    artistOpacityRow3
  } = useLineupAnimation(scrollYProgress);

  return (
    <div ref={containerRef} className="relative h-[calc(220dvh)]">
      <motion.section className="bg-background sticky top-0 z-10 h-[100dvh] overflow-hidden">
        <motion.h2
          // style={{
          //   scale: titleScaleValue,
          //   opacity: titleOpacityValue
          // }}
          className="3xl:text-[400px] absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(180deg,#00FBA2_0%,#00FBA2_18%,#8CFF6D_31%,#00FBA2_49%,#00FBA2_83%)] bg-clip-text text-center text-[280px] leading-[240px] font-[900] tracking-tighter text-transparent uppercase 2xl:leading-[320px]"
        >
          Line
          <br />
          Up
        </motion.h2>

        <div className="absolute inset-0">
          {/* {ARTISTS.map((artist, index) => (
            <motion.div
              key={artist.name}
              style={{
                translateY: [artist1Y, artist2Y, artist3Y, artist4Y][index % 4],
                opacity: artistOpacity
              }}
              className="relative"
            >
              <ArtistFlag artist={artist} />
            </motion.div>
          ))} */}
          <motion.div
            style={{
              translateY: artist1Y,
              opacity: artistOpacityRow1
            }}
          >
            <ArtistFlag artist={ARTISTS[0]} className={cn(baseMotionClassName, "left-[5vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist2Y,
              opacity: artistOpacityRow1
            }}
          >
            <ArtistFlag artist={ARTISTS[1]} className={cn(baseMotionClassName, "left-[20vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist3Y,
              opacity: artistOpacityRow1
            }}
          >
            <ArtistFlag artist={ARTISTS[2]} className={cn(baseMotionClassName, "left-[38vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist4Y,
              opacity: artistOpacityRow1
            }}
          >
            <ArtistFlag artist={ARTISTS[3]} className={cn(baseMotionClassName, "left-[57vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist5Y,
              opacity: artistOpacityRow1
            }}
          >
            <ArtistFlag artist={ARTISTS[4]} className={cn(baseMotionClassName, "left-[72vw]")} />
          </motion.div>

          <motion.div
            style={{
              translateY: artist6Y,
              opacity: artistOpacityRow2
            }}
          >
            <ArtistFlag artist={ARTISTS[5]} className={cn(baseMotionClassName, "left-[2vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist7Y,
              opacity: artistOpacityRow2
            }}
          >
            <ArtistFlag artist={ARTISTS[6]} className={cn(baseMotionClassName, "left-[18vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist8Y,
              opacity: artistOpacityRow2
            }}
          >
            <ArtistFlag artist={ARTISTS[7]} className={cn(baseMotionClassName, "left-[56vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist9Y,
              opacity: artistOpacityRow2
            }}
          >
            <ArtistFlag artist={ARTISTS[8]} className={cn(baseMotionClassName, "left-[70vw]")} />
          </motion.div>

          <motion.div
            style={{
              translateY: artist10Y,
              opacity: artistOpacityRow3
            }}
          >
            <ArtistFlag artist={ARTISTS[9]} className={cn(baseMotionClassName, "left-[10vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist11Y,
              opacity: artistOpacityRow3
            }}
          >
            <ArtistFlag artist={ARTISTS[10]} className={cn(baseMotionClassName, "left-[25vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist12Y,
              opacity: artistOpacityRow3
            }}
          >
            <ArtistFlag artist={ARTISTS[11]} className={cn(baseMotionClassName, "left-[48vw]")} />
          </motion.div>
          <motion.div
            style={{
              translateY: artist13Y,
              opacity: artistOpacityRow3
            }}
          >
            <ArtistFlag artist={ARTISTS[12]} className={cn(baseMotionClassName, "left-[62vw]")} />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

const LineUpSection = () => {
  const { width } = useWindowSize();
  const isMobile = width && width < 1024;

  return isMobile ? <LineUpSectionMobile /> : <LineUpSectionDesktop />;
};

export default LineUpSection;
