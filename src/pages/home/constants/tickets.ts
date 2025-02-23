import { TicketCategory, TicketDuration, TicketPlan } from "../types";

export const TICKET_PLANS: TicketPlan[] = [
  {
    category: TicketCategory.STANDARD,
    duration: TicketDuration.ONE_DAY
  },
  {
    category: TicketCategory.FAMILY,
    duration: TicketDuration.ONE_DAY
  },
  {
    category: TicketCategory.FRIENDS,
    duration: TicketDuration.ONE_DAY
  },
  {
    category: TicketCategory.STANDARD,
    duration: TicketDuration.TWO_DAYS
  },
  {
    category: TicketCategory.FAMILY,
    duration: TicketDuration.TWO_DAYS
  },
  {
    category: TicketCategory.FRIENDS,
    duration: TicketDuration.TWO_DAYS
  }
];
