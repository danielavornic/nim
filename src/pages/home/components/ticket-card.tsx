import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { TicketCategory, TicketPlan } from "../types";

interface TicketCardProps {
  plan: TicketPlan;
}

const TicketCard = ({ plan }: TicketCardProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[350px] rounded-[8px] bg-gradient-to-b from-transparent from-[14%] via-[57%] to-[100%]",
        {
          "to-go-neon-green via-muted":
            plan.category === TicketCategory.STANDARD || plan.category === TicketCategory.FAMILY,
          "via-[#1c6fff] to-[#1300AC]": plan.category === TicketCategory.FRIENDS
        }
      )}
    >
      <div className="rounded-[8.5px] p-[3px]">
        <div className="bg-background relative rounded-[8.5px] px-5 pt-[50px] pb-7 lg:pt-[58px] lg:pb-9 xl:px-6">
          <h3
            className={cn(
              "text-foreground text-center text-[60px] leading-tight font-[900] tracking-tighter uppercase xl:text-[70px]",
              {
                "from-muted to-accent bg-gradient-to-r bg-clip-text text-transparent":
                  plan.category === TicketCategory.STANDARD,
                "from-go-neon-green to-accent bg-gradient-to-r bg-clip-text text-transparent":
                  plan.category === TicketCategory.FAMILY,
                "from-go-blue bg-gradient-to-r to-[#005FFF] bg-clip-text text-transparent":
                  plan.category === TicketCategory.FRIENDS
              }
            )}
          >
            {t(`tickets.categories.${plan.category}.title`)}
          </h3>
          <p className="text-center text-[60px] leading-tight font-[900] tracking-tighter text-[#CEE6F2] uppercase xl:text-[70px]">
            {t(`tickets.days.${plan.duration}`)}
          </p>
          <p className="mt-4 text-center text-lg font-[800] text-[#CEE6F2] xl:text-xl">
            {t(`tickets.categories.${plan.category}.description`)}
          </p>
          <div className="relative z-10 mt-9 flex justify-center">
            <Button asChild>
              <a href="https://afisha.md" target="_blank" rel="noopener noreferrer">
                {t("tickets.buy")}
              </a>
            </Button>
          </div>
          <img
            src={`/plan-${plan.category}-shadow.png`}
            className="absolute right-0 bottom-0 left-0 z-0 h-full w-full rounded-[8px] select-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
