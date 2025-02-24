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

const INSTITUTIONAL_PARTNERS = [
  {
    name: "Moldtelecom",
    image: "/images/partners/moldtelecom.svg",
    link: "https://moldtelecom.md"
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
      <section className="bg-go-neon-green text-muted-foreground 4xl:pt-[150px] min-h-[calc(90dvh-var(--header-height-mobile))] py-20 lg:min-h-[calc(100dvh-var(--header-height-desktop))] lg:py-24 xl:pt-32 2xl:pt-[120px]">
        <div className="3xl:max-w-none 3xl:flex 3xl:flex-col 3xl:items-center container mx-auto px-4">
          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <motion.h1
              className="text-center text-4xl leading-tight font-black tracking-[-0.04em] uppercase md:-mt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
            >
              {t("partners.organizer")}
            </motion.h1>

            <motion.a
              href={ORGANIZER.link}
              key={ORGANIZER.name}
              target="_blank"
              title={ORGANIZER.name}
              rel="noopener noreferrer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <img src={ORGANIZER.image} alt={ORGANIZER.name} className="mx-auto block w-[160px]" />
            </motion.a>
          </div>

          <div className="3xl:!gap-[120px] 4xl:!gap-[150px] mt-[75px] flex flex-col items-center gap-[60px] 2xl:flex-row">
            <div className="flex flex-col items-center justify-center gap-9 lg:flex-row">
              <motion.h1
                className="text-center text-4xl leading-[1] font-black tracking-[-0.04em] uppercase lg:-mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariants}
              >
                {t("partners.general_partners")}
              </motion.h1>
              <div className="flex flex-col items-center justify-center gap-9 md:flex-row">
                {PARTNERS.map((partner, i) => (
                  <motion.a
                    href={partner.link}
                    key={partner.name}
                    target="_blank"
                    title={partner.name}
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUpVariants}
                  >
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className={cn("mx-auto block w-auto", {
                        "h-[56px]": i === 1,
                        "h-[48px] md:-mt-9": i === 0
                      })}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-9 lg:flex-row 2xl:-mt-5">
              <motion.h1
                className="text-center text-4xl leading-[1] font-black tracking-[-0.04em] uppercase"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUpVariants}
              >
                {t("partners.institutional_partner")}
              </motion.h1>
              <div className="flex flex-col items-center justify-center gap-9 md:flex-row">
                {INSTITUTIONAL_PARTNERS.map((partner) => (
                  <motion.a
                    href={partner.link}
                    key={partner.name}
                    target="_blank"
                    title={partner.name}
                    rel="noopener noreferrer"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={fadeUpVariants}
                  >
                    <img src={partner.image} alt={partner.name} className="mx-auto block w-full md:w-auto" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
