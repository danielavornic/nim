import { useTranslation } from "react-i18next";
import { TICKET_PLANS } from "../constants/tickets";
import TicketCard from "./ticket-card";

const TicketsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-background py-16 lg:px-4 lg:py-32 xl:px-0">
      <div id="tickets" className="container mx-auto max-w-[77rem] px-4">
        <h2 className="from-go-neon-green to-accent 3xl:!text-[120px] bg-linear-20 to-50% bg-clip-text text-center text-[90px] font-black tracking-tighter text-transparent uppercase lg:text-left lg:text-[100px] 2xl:text-[110px]">
          {t("tickets.title")}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:mx-auto md:max-w-[640px] lg:max-w-none lg:grid-cols-3 lg:gap-8 xl:gap-x-[45px]">
          {TICKET_PLANS.map((plan) => (
            <TicketCard key={`${plan.category}-${plan.duration}`} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
