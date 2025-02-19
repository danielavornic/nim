import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { createFadeUpVariants } from "@/lib/animations";
const PARTNERS = [
  {
    name: "Primăria Chișinău",
    image: "/partners/primaria.svg",
    link: "https://www.chisinau.md"
  },
  {
    name: "VictoriaBank",
    image: "/partners/vb.svg",
    link: "https://www.victoriabank.md/en"
  },
  {
    name: "Versus Artist",
    image: "/partners/versus.svg",
    link: "https://www.versusartist.com"
  }
];

const PartnersPage = () => {
  const { t } = useTranslation();

  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.5 });

  return (
    <section className="bg-go-neon-green text-muted-foreground min-h-[calc(90dvh-var(--header-height-mobile))] py-20 lg:min-h-[calc(90dvh-var(--header-height-desktop))] xl:py-32">
      <div className="container mx-auto px-4">
        <motion.h1
          className="4xl:!text-9xl text-center text-5xl leading-tight font-black tracking-[-0.04em] uppercase md:text-6xl xl:text-7xl 2xl:text-8xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          {t("partners.title")}
        </motion.h1>

        <div className="mt-16 flex flex-col items-center justify-center md:flex-row xl:mt-20">
          {PARTNERS.map((partner, i) => (
            <motion.a
              href={partner.link}
              key={partner.name}
              target="_blank"
              title={partner.name}
              rel="noopener noreferrer"
              className={cn({ "4xl:!mx-40 3xl:!mx-32 mt-16 mb-20 md:mx-16 md:my-0 lg:mx-24": i === 1 })}
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
  );
};

export default PartnersPage;
