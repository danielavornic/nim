export interface Artist {
  name: string;
  displayName?: string;
  image: string;
  flag: {
    direction: "left" | "right" | "bottom" | "top";
    className?: string;
  };
  text: {
    direction: "left" | "right";
    position: "top" | "bottom" | "center";
    className?: string;
  };
}

export enum TicketCategory {
  STANDARD = "standard",
  FAMILY = "family",
  FRIENDS = "friends"
}

export enum TicketDuration {
  ONE_DAY = "one",
  TWO_DAYS = "two"
}

export interface TicketPlan {
  category: TicketCategory;
  duration: TicketDuration;
}
