import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { createFadeUpVariants } from "@/lib/animations";
import { SEO } from "@/components/seo";

const ORGANIZER = {
  name: "Versus Artist",
  image: "/images/partners/versus.svg",
  link: "https://www.versusartist.com"
};

const PARTNERS = [
  {
    name: "VictoriaBank",
    image: "/images/partners/vb.svg",
    link: "https://www.victoriabank.md/en"
  },
  {
    name: "Linella",
    image: "/images/partners/linella.svg",
    link: "https://www.linella.md"
  }
];

const PartnersPage = () => {
  const { t } = useTranslation();

  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.5 });

  return (
    <>
      <SEO
        title={t("meta.partners.title")}
        description={t("meta.partners.description")}
        keywords={t("meta.partners.keywords")}
      />
      <section className="bg-go-neon-green text-muted-foreground min-h-[calc(90dvh-var(--header-height-mobile))] py-20 lg:min-h-[calc(100dvh-var(--header-height-desktop))] lg:py-24">
        <div className="container mx-auto px-4">
          <motion.h1
            className="4xl:!text-9xl text-center text-5xl leading-tight font-black tracking-[-0.04em] uppercase md:text-6xl lg:text-7xl 2xl:text-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            {t("partners.organizer")}
          </motion.h1>

          <div className="mt-8 flex flex-col items-center justify-center md:flex-row">
            <motion.a
              href={ORGANIZER.link}
              key={ORGANIZER.name}
              target="_blank"
              title={ORGANIZER.name}
              rel="noopener noreferrer"
              // className={cn({ "4xl:!mx-40 3xl:!mx-32 mt-16 mb-20 md:mx-16 md:my-0 lg:mx-24": i === 1 })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <img src={ORGANIZER.image} alt={ORGANIZER.name} className="mx-auto block w-full" />
            </motion.a>
          </div>

          <motion.h1
            className="4xl:!text-9xl mt-20 text-center text-5xl leading-tight font-black tracking-[-0.04em] uppercase md:text-6xl lg:text-7xl xl:mt-32 2xl:text-8xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            {t("partners.title")}
          </motion.h1>

          <div className="mt-8 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-20">
            {PARTNERS.map((partner) => (
              <motion.a
                href={partner.link}
                key={partner.name}
                target="_blank"
                title={partner.name}
                rel="noopener noreferrer"
                // className={cn({ "4xl:!mx-40 3xl:!mx-32 mt-16 mb-20 md:mx-16 md:my-0 lg:mx-24": i === 1 })}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUpVariants}
              >
                <img src={partner.image} alt={partner.name} className="mx-auto block w-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
