import Header from "@/layouts/components/header";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { ARTISTS } from "../constants/artists";
import HeroEventInfo from "./hero-event-info";
import HeroGraphics from "./hero-graphics";
import MegaMixTooltip from "./mega-mix-tooltip";
import { containerVariants, createFadeUpVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
const ArtistBlock = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "text-secondary xs:h-[40px] xs:text-[40px] relative -mt-1 flex h-9 items-start gap-1 text-center text-4xl leading-tight font-[950] tracking-[-0.04em] whitespace-nowrap uppercase select-none lg:h-[28px] lg:text-[28px] xl:h-[1.9vw] xl:text-[1.9vw]",
        className
      )}
    >
      {children}
    </div>
  );
};

const HeroMobile = () => {
  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.5 });

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={fadeUpVariants}>
          <Header className="bg-transparent" />
        </motion.div>

        <motion.section className="bg-background relative min-h-[calc(100dvh-var(--header-height-mobile))] overflow-hidden pt-10 lg:min-h-[calc(100dvh-var(--header-height))]">
          <div className="container mx-auto px-4">
            <motion.h1 className="sr-only" variants={fadeUpVariants}>
              Născut în Moldova
            </motion.h1>

            <motion.div variants={fadeUpVariants}>
              <img src="/nim-title-vertical.svg" alt="NIM" className="mx-auto w-full max-w-[400px] md:hidden" />
              <img src="/nim-title.svg" alt="NIM" className="mx-auto hidden w-full max-w-[800px] md:block" />
            </motion.div>

            <motion.div className="flex flex-col gap-3" variants={fadeUpVariants}>
              <div className="sm:-gap-y-1 z-10 mt-16 flex cursor-default flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-x-6 lg:mx-10 lg:mt-[70px] lg:gap-x-8 xl:mx-12">
                {ARTISTS.map((artist) => (
                  <ArtistBlock key={artist.name}>{artist.name}</ArtistBlock>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <ArtistBlock className="text-go-medium-green">
                  MEGA MIX <MegaMixTooltip />
                </ArtistBlock>
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <HeroEventInfo />
            </motion.div>
          </div>

          <motion.div className="mt-12" variants={fadeUpVariants}>
            <img src="/hero-lateral.svg" alt="Hero Lateral" className="ml-auto w-full max-w-[1000px] lg:mb-[-200px]" />
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

const HeroDesktop = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 25
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // delay before starting children animations
        staggerChildren: 0.3 // between each child animation
      }
    }
  };

  return (
    <div ref={containerRef} className="relative h-[calc(150dvh)]">
      <motion.section
        className="bg-background sticky top-0 z-10 h-[100dvh] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div variants={fadeUpVariants}>
          <Header className="bg-transparent" />
        </motion.div>

        <motion.div className="4xl:!pt-24 3xl:!pt-[5dvh] relative z-10 container mx-auto pt-10 xl:pt-[5dvh] 2xl:pt-[3dvh]">
          <motion.h1 className="sr-only" variants={fadeUpVariants}>
            Născut în Moldova
          </motion.h1>

          <motion.img
            src="/nim-title.svg"
            alt="NIM"
            className="3xl:!max-w-[1100px] 4xl:!max-w-[1920px] mx-auto w-full max-w-[1000px] 2xl:max-w-[1100px]"
            variants={fadeUpVariants}
          />

          <motion.div className="space-y-3" variants={fadeUpVariants}>
            <div className="sm:-gap-y-1 4xl:!mt-28 4xl:!mx-16 3xl:!mx-[230px] z-10 mt-16 flex cursor-default flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-x-5 lg:mx-10 lg:mt-[70px] lg:gap-x-8 xl:mx-52 xl:mt-[5dvh]">
              {ARTISTS.map((artist) => (
                <ArtistBlock key={artist.name}>{artist.name}</ArtistBlock>
              ))}
            </div>

            <div className="flex items-center justify-center">
              <ArtistBlock className="text-go-medium-green">
                MEGA MIX
                <MegaMixTooltip />
              </ArtistBlock>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <HeroEventInfo />
          </motion.div>
        </motion.div>

        <HeroGraphics scrollYProgress={scrollYProgress} />
        <div className="absolute right-0 bottom-0 left-0 z-0 h-[70dvh] bg-gradient-to-t from-[#00DF7550] from-5% via-[#00DF7510] to-transparent" />
        <img src="/hero-radial.png" alt="Hero Radial" className="absolute right-0 bottom-0 left-0 z-[3] h-[70dvh]" />
      </motion.section>
    </div>
  );
};

const Hero = () => {
  const { width } = useWindowSize();
  const isDesktop = width && width >= 1280;

  if (!isDesktop) {
    return <HeroMobile />;
  }

  return <HeroDesktop />;
};

export default Hero;
