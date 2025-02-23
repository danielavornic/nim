import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { createFadeUpVariants } from "@/lib/animations";

const AboutSection = () => {
  const { t } = useTranslation();
  const fadeUpVariants = createFadeUpVariants({ y: 25, duration: 0.8 });

  return (
    <motion.section
      className="bg-muted text-muted-foreground py-20 xl:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.h2 className="sr-only" variants={fadeUpVariants}>
          {t("home.about.title")}
        </motion.h2>
        <motion.p
          className="3xl:!text-[44px] px-4 text-center text-2xl leading-tight font-[900] tracking-[-0.04em] whitespace-pre-line uppercase md:text-4xl"
          variants={fadeUpVariants}
        >
          {t("home.about.description")}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
