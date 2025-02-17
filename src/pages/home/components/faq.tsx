import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const faqItems = t("tickets.faq", { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="bg-background pb-32 lg:px-4 lg:pt-32 lg:pb-40 xl:px-0">
      <div id="faq" className="container mx-auto max-w-[77rem] px-4">
        <h2 className="from-go-neon-green to-accent 3xl:!text-[120px] bg-linear-20 to-50% bg-clip-text text-center text-[90px] font-black tracking-tighter text-transparent uppercase lg:text-left lg:text-[100px] 2xl:text-[110px]">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="mt-0">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-bold">
                <h3
                  className="pt-1 text-[26px] leading-[24px] font-[900] tracking-tight"
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
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
