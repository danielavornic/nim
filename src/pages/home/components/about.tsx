import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-muted text-muted-foreground py-20 xl:py-32">
      <div className="max-w-8xl container mx-auto">
        <h2 className="sr-only">{t("home.about.title")}</h2>
        <p className="3xl:!text-[44px] px-4 text-center text-2xl leading-tight font-[900] tracking-tighter whitespace-pre-line uppercase md:text-4xl">
          {t("home.about.description")}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
