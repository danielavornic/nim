import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { createFadeUpVariants } from "@/lib/animations";

const FAQ = () => {
  const { t } = useTranslation();
  const faqItems = t("tickets.faq", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const fadeUpVariants = createFadeUpVariants({ y: 50 });

  return (
    <section className="bg-background pb-32 lg:px-4 lg:pt-28 lg:pb-40 xl:px-0">
      <div id="faq" className="container mx-auto max-w-[77rem] px-4">
        <motion.h2
          className="3xl:!text-[120px] faq-title text-center text-[90px] font-[800] tracking-[-0.04em] text-transparent uppercase lg:text-[100px] 2xl:text-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          FAQ
        </motion.h2>

        <Accordion type="single" collapsible className="mt-[50px] lg:mt-[70px]">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariants}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-bold">
                  <h3
                    className="pt-1 text-[26px] leading-[24px] font-[850] tracking-tight"
                    dangerouslySetInnerHTML={{ __html: item.question }}
                  />
                </AccordionTrigger>
                <AccordionContent className="text-gray-200">
                  <div
                    className="[&>p>a]:!underline [&>ul]:list-disc [&>ul]:pl-10"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
