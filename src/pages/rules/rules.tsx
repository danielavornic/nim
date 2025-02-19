import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { createFadeUpVariants } from "@/lib/animations";
const RulesPage = () => {
  const { t } = useTranslation();
  const slides = t("rules.slides", { returnObjects: true }) as string[];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.5 });

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-muted text-background min-h-[calc(90dvh-var(--header-height-mobile))] py-20 lg:min-h-[calc(90dvh-var(--header-height-desktop))] xl:pt-32 xl:pb-40">
      <div className="container mx-auto px-4 lg:max-w-5xl">
        <motion.h1
          className="4xl:!text-9xl text-center text-5xl leading-tight font-black tracking-[-0.04em] uppercase md:text-6xl lg:text-left xl:text-7xl 2xl:text-8xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          {t("rules.title")}
        </motion.h1>

        <motion.div
          className="mt-10 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
        >
          <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
            <CarouselContent className="mb-16 lg:mb-20 xl:mb-32">
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div
                    className={cn(
                      "cursor-default tracking-[-0.04em] select-none",
                      "[&>h3]:text-[39px] [&>h3]:leading-[37px] [&>h3]:font-[950]",
                      "3xl:[&>h4]:!text-[36px] 3xl:![&>h4]:leading-[32px] [&>h4]:mt-8 [&>h4]:mb-3 [&>h4]:text-[28px] [&>h4]:leading-[24px] [&>h4]:font-bold lg:[&>h4]:mt-12 2xl:[&>h4]:text-[32px] 2xl:[&>h4]:leading-[28px]",
                      "3xl:[&>p]:!text-[32px] leading-tight [&>p]:text-[24px] [&>p]:leading-normal sm:[&>p]:text-justify 2xl:[&>p]:text-[28px] 2xl:[&>p]:leading-tight",
                      "3xl:[&>ul]:!text-[32px] [&>ul]:list-disc [&>ul]:pl-10 [&>ul]:text-[24px] [&>ul]:leading-normal 2xl:[&>ul]:text-[28px] 2xl:[&>ul]:leading-tight"
                    )}
                    dangerouslySetInnerHTML={{ __html: slide }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <motion.div className="flex flex-col items-center justify-center gap-10" variants={fadeUpVariants}>
              <div className="flex items-center justify-center gap-12 xl:gap-16">
                <CarouselPrevious className="border-background hover:border-go-neon-green active:border-go-neon-green max-w-md:focus:border-go-neon-green static left-0 size-20 translate-x-0 translate-y-0 transform-none transition-all duration-300 md:size-24 lg:size-28 [&>svg]:size-10 md:[&>svg]:size-12 xl:[&>svg]:size-16" />
                <div className="hidden w-0 pt-[11px] text-center text-[64px] leading-[60px] font-[950] select-none sm:block sm:w-[161px] lg:w-[200px] lg:text-[80px] lg:leading-[76px]">
                  {currentSlide + 1}/{slides.length}
                </div>
                <CarouselNext className="border-background hover:border-go-neon-green active:border-go-neon-green max-w-md:focus:border-go-neon-green static left-0 size-20 translate-x-0 translate-y-0 transform-none transition-all duration-300 md:size-24 lg:size-28 [&>svg]:size-10 md:[&>svg]:size-12 xl:[&>svg]:size-16" />
              </div>
              <div className="text-[64px] leading-[60px] font-[800] sm:hidden">
                {currentSlide + 1}/{slides.length}
              </div>
            </motion.div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesPage;
