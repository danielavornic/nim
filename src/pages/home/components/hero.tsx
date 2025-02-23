import Header from "@/layouts/components/header";
import { containerVariants, createFadeUpVariants } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ARTISTS, HERO_ARTISTS } from "../constants/artists";
import HeroEventInfo from "./hero-event-info";
import HeroGraphics from "./hero-graphics";
const ArtistBlock = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "text-secondary 1.5xl:!text-[32px] 4xl:!text-[60px] 3xl:!text-[48px] relative flex h-9 items-start gap-1 text-center text-[40px] leading-tight font-[900] tracking-[-0.04em] whitespace-nowrap uppercase select-none lg:text-[40px] xl:text-[27px] 2xl:text-[30px]",
        className
      )}
    >
      {children}
    </div>
  );
};

const HeroMobile = () => {
  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.5 });
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100dvh-var(--header-height-mobile))]">
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <motion.div variants={fadeUpVariants}>
          <Header className="bg-transparent" />
        </motion.div>

        <motion.section className="bg-background relative overflow-hidden pt-10">
          <div className="relative z-10 container mx-auto px-4">
            <motion.h1 className="sr-only" variants={fadeUpVariants}>
              Născut în Moldova
            </motion.h1>

            <motion.div variants={fadeUpVariants}>
              <img src="/images/nim-title-vertical.svg" alt="NIM" className="mx-auto w-full max-w-[400px] md:hidden" />
              <img src="/images/nim-title.svg" alt="NIM" className="mx-auto hidden w-full max-w-[800px] md:block" />
            </motion.div>

            <motion.div className="flex flex-col gap-3" variants={fadeUpVariants}>
              <div className="sm:-gap-y-1 z-10 mt-16 flex cursor-default flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-x-6 lg:mx-10 lg:mt-[70px] lg:gap-x-8 xl:mx-12">
                {HERO_ARTISTS.map((artist) => (
                  <ArtistBlock key={artist.name}>{artist.name}</ArtistBlock>
                ))}
              </div>
              <div className="mt-[30px] flex flex-col items-center">
                <ArtistBlock className="text-go-medium-green">MEGA MIX</ArtistBlock>
                <p className="text-go-medium-green mt-5 text-center text-[25px] font-[850] tracking-[-0.04em] whitespace-pre-line uppercase">
                  {t("home.hero.megamix_lineup")}
                </p>
              </div>
            </motion.div>
            <motion.div variants={fadeUpVariants}>
              <HeroEventInfo />
            </motion.div>
          </div>

          <motion.div className="relative" variants={fadeUpVariants}>
            <div className="blurred-mask absolute right-0 bottom-0 z-[2] h-[120dvh] w-[40vw]" />
            <div className="absolute right-0 bottom-0 left-0 z-0 h-[100dvh] bg-[url('/images/hero-mobile.png')] bg-cover bg-bottom bg-no-repeat md:hidden" />
            <div className="absolute right-0 bottom-0 left-0 z-0 hidden h-[160dvh] bg-[url('/images/hero-radial.png')] bg-cover bg-bottom bg-no-repeat md:block lg:mb-[100px]" />
            <img
              src="/images/hero-lateral.webp"
              alt="Hero Lateral"
              className="relative z-[1] mt-32 ml-auto w-full max-w-[1000px] origin-bottom-left scale-[220%] transform md:scale-[140%] lg:-mt-10 lg:mb-[-100px] lg:scale-100"
            />
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
  const { t } = useTranslation();
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

        <motion.div className="4xl:!pt-24 3xl:!pt-[2dvh] 4xl:!max-w-[1920px] relative z-10 container mx-auto pt-10 xl:pt-[1dvh] 2xl:pt-[2dvh]">
          <motion.h1 className="sr-only" variants={fadeUpVariants}>
            Născut în Moldova
          </motion.h1>

          <motion.img
            src="/images/nim-title.svg"
            alt="NIM"
            className="3xl:!max-w-[1200px] 4xl:!max-w-none 4xl:!w-[1920px] mx-auto w-full max-w-[860px] 2xl:max-w-[1000px]"
            variants={fadeUpVariants}
          />

          <motion.div className="space-y-3" variants={fadeUpVariants}>
            <div className="sm:-gap-y-1 4xl:!mt-20 4xl:!mx-0 4xl:!gap-y-8 3xl:!gap-y-6 3xl:!mx-[20px] 1.5xl:!mx-[80px] 1.5xl:!gap-y-2 z-10 mt-16 flex cursor-default flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-x-5 lg:mx-10 lg:mt-[70px] xl:mx-[160px] xl:mt-[5dvh] xl:gap-y-0 2xl:mx-[200px] 2xl:gap-y-0">
              {HERO_ARTISTS.map((artist) => (
                <ArtistBlock key={artist.name}>
                  {artist.name}
                  {artist.name === "Zdob și Zdub" && " și Frații Advahov"}
                </ArtistBlock>
              ))}
            </div>

            <div className="3xl:!mt-7 4xl:mt-10 mt-2 flex flex-col items-center justify-center">
              <ArtistBlock className="text-go-medium-green">MEGA MIX</ArtistBlock>
              <p className="text-go-medium-green 3xl:!mt-7 3xl:!text-[20px] 4xl:!mt-10 4xl:text-[25px] mt-1 text-center text-[20px] leading-[1.25] font-[850] tracking-[-0.04em] whitespace-pre-line uppercase 2xl:text-[16px]">
                {t("home.hero.megamix_lineup")}
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <HeroEventInfo />
          </motion.div>
        </motion.div>

        <HeroGraphics scrollYProgress={scrollYProgress} />
        <div className="absolute right-0 bottom-0 left-0 z-0 h-[70dvh] bg-gradient-to-t from-[#00DF7550] from-5% via-[#00DF7510] to-transparent" />
        <img
          src="/images/hero-radial.png"
          alt="Hero Radial"
          className="absolute right-0 bottom-0 left-0 z-[0] h-[70dvh] w-screen"
        />
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
