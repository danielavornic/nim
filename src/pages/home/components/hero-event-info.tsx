import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroEventInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-secondary 4xl:!mt-[4dvh] 4xl:!text-[60px] 4xl:leading-[2.5vw] 3xl:!text-[48px] z-10 mt-16 text-center text-[60px] leading-[0.88] font-[950] tracking-[-0.04em] uppercase select-none sm:text-[60px] sm:leading-[50px] lg:mt-[3dvh] lg:text-[54px] xl:text-[36px]">
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
