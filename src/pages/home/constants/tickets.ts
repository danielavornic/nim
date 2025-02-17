import { TicketCategory, TicketDuration, TicketPlan } from "../types";

export const TICKET_PLANS: TicketPlan[] = [
  {
    category: TicketCategory.STANDARD,
    duration: TicketDuration.ONE_DAY,
    className: "from-[#AEFF6D] to-[#00FBA2] hover:from-[#00FBA2] hover:to-[#AEFF6D]"
  },
  {
    category: TicketCategory.FAMILY,
    duration: TicketDuration.ONE_DAY,
    className: "from-[#00FBA2] to-[#00DF75] hover:from-[#00DF75] hover:to-[#00FBA2]"
  },
  {
    category: TicketCategory.FRIENDS,
    duration: TicketDuration.ONE_DAY,
    className: "from-[#00DF75] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00DF75]"
  },
  {
    category: TicketCategory.STANDARD,
    duration: TicketDuration.TWO_DAYS,
    className: "from-[#AEFF6D] to-[#00FBA2] hover:from-[#00FBA2] hover:to-[#AEFF6D]"
  },
  {
    category: TicketCategory.FAMILY,
    duration: TicketDuration.TWO_DAYS,
    className: "from-[#00FBA2] to-[#00DF75] hover:from-[#00DF75] hover:to-[#00FBA2]"
  },
  {
    category: TicketCategory.FRIENDS,
    duration: TicketDuration.TWO_DAYS,
    className: "from-[#00DF75] to-[#0066FF] hover:from-[#0066FF] hover:to-[#00DF75]"
  }
];
