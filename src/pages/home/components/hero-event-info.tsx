import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroEventInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-secondary 1.5xl:!text-[1.9vw] 4xl:!mt-[4dvh] 4xl:!text-[2.2vw] 4xl:leading-[2.5vw] z-10 mt-20 text-center text-[54px] leading-[48px] font-[950] tracking-[-0.04em] uppercase select-none sm:text-[60px] sm:leading-[50px] lg:mt-[3dvh] lg:text-[36px] lg:leading-[32px]">
        14 - 15 {t("home.hero.june")}
        <span className="hidden md:inline"> · </span>
        <br className="md:hidden" />
        {t("home.hero.zimbru_stadium")}
      </p>

      <div className="4xl:mt-[3.5dvh] z-10 mt-16 flex justify-center xl:mt-[3.5dvh]">
        <Button variant="outline" size="lg" asChild>
          <a href="https://afisha.md" target="_blank">
            {t("home.hero.info_tickets")}
          </a>
        </Button>
      </div>
    </>
  );
};

export default HeroEventInfo;
