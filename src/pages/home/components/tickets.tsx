import { useTranslation } from "react-i18next";
import { TICKET_PLANS } from "../constants/tickets";
import TicketCard from "./ticket-card";
import { motion } from "framer-motion";
import { createFadeUpVariants } from "@/lib/animations";
import TicketEarlyBird from "./ticket-eary-bird";

const TicketsSection = () => {
  const { t } = useTranslation();
  const fadeUpVariants = createFadeUpVariants({ y: 50 });

  return (
    <section className="bg-background py-16 lg:px-4 lg:py-32 xl:px-0">
      <div id="tickets" className="container mx-auto max-w-[77rem] px-4">
        <div className="mb-[100px] flex justify-center xl:mb-[150px]">
          <motion.div variants={fadeUpVariants}>
            <TicketEarlyBird />
          </motion.div>
        </div>

        <motion.h2
          className="from-go-neon-green to-accent 3xl:!text-[120px] bg-linear-20 to-50% bg-clip-text text-center text-[90px] font-[800] tracking-[-0.04em] text-transparent uppercase lg:text-left lg:text-[100px] 2xl:text-[110px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          {t("tickets.title")}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:mx-auto md:max-w-[640px] lg:max-w-none lg:grid-cols-3 lg:gap-8 xl:gap-x-[30px]">
          {TICKET_PLANS.map((plan, index) => (
            <motion.div
              key={`${plan.category}-${plan.duration}`}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: "-50px",
                amount: 0.3 // Triggers when 30% of the element is in view
              }}
              variants={createFadeUpVariants({
                y: 50,
                duration: 0.3,
                delay: 0.1 * index // Adds a slight delay based on card position
              })}
            >
              <TicketCard plan={plan} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
