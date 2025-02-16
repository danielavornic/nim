import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const HeroEventInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-secondary z-10 mt-20 text-center text-[54px] leading-[48px] font-[900] uppercase select-none sm:text-[60px] sm:leading-[50px] lg:mt-16 lg:text-[48px] lg:leading-[40px]">
        14 - 15 {t("home.hero.june")}
        <span className="hidden md:inline"> · </span>
        <br className="md:hidden" />
        {t("home.hero.zimbru_stadium")}
      </p>

      <div className="z-10 mt-16 flex justify-center xl:mt-[4dvh]">
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
