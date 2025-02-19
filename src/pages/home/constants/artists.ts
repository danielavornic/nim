import { Artist } from "../types";

export const ARTISTS: Artist[] = [
  {
    name: "Irina Rimes",
    image: "/artists/irina-rimes.png",
    flag: {
      direction: "bottom",
      className: "bg-muted fill-muted"
    },
    text: {
      direction: "right",
      position: "top",
      className: "text-go-dark-green"
    }
  },
  {
    name: "Alternosfera",
    image: "/artists/alternosfera.png",
    flag: {
      direction: "bottom",
      className: "bg-accent fill-accent"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-go-blue text-center leading-[0.75] text-[44px]"
    }
  },
  {
    name: "Zdob și Zdub",
    image: "/artists/zdob-and-zdub.png",
    flag: {
      direction: "bottom",
      className: "bg-go-dark-green fill-go-dark-green"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-accent pl-12"
    }
  },
  {
    name: "Carla's Dreams",
    image: "/artists/csd.png",
    flag: {
      direction: "right",
      className: "bg-secondary fill-secondary"
    },
    text: {
      direction: "right",
      position: "top",
      className: "text-go-dark-green text-[65px] leading-[50px]"
    }
  },
  {
    name: "Satoshi",
    image: "/artists/satoshi.png",
    flag: {
      direction: "left",
      className: "bg-accent fill-accent"
    },
    text: {
      direction: "right",
      position: "bottom",
      className: "text-go-blue text-[65px] text-center leading-[50px]"
    }
  },
  {
    name: "Misha Miller",
    image: "/artists/misha-miller.png",
    flag: {
      direction: "left",
      className: "bg-go-blue fill-go-blue"
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-muted ml-10 text-[65px]  leading-[50px] text-center"
    }
  },
  {
    name: "Mihail",
    image: "/artists/mihail.png",
    flag: {
      direction: "left",
      className: "bg-accent fill-accent "
    },
    text: {
      direction: "left",
      position: "bottom",
      className: "text-go-dark-green ml-20"
    }
  },
  {
    name: "Magnat & Feoctist",
    image: "/artists/magnat-feoctist.png",
    flag: {
      direction: "bottom",
      className: "bg-muted fill-muted"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-background text-[60px] leading-[50px] ml-12"
    }
  },
  {
    name: "The Urs",
    displayName: "The\nUrs",
    image: "/artists/the-urs.png",
    flag: {
      direction: "bottom",
      className: "bg-accent fill-accent"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-go-blue ml-24"
    }
  },
  {
    name: "Dara",
    image: "/artists/dara.png",
    flag: {
      direction: "left",
      className: "bg-secondary fill-secondary"
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-go-blue ml-32"
    }
  },
  {
    name: "Tania Turtureanu",
    displayName: "Tania T.",
    image: "/artists/tania.png",
    flag: {
      direction: "left",
      className: "bg-secondary fill-secondary"
    },
    text: {
      direction: "right",
      position: "bottom",
      className: "text-go-blue ml-16"
    }
  },
  {
    name: "Marej",
    displayName: "Marej",
    image: "/artists/marej.png",
    flag: {
      direction: "right",
      className: "bg-foreground fill-foreground"
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-muted text-[65px] leading-[50px] ml-8"
    }
  },
  {
    name: "Iuliana Beregoi",
    displayName: "Iuliana Beregoi",
    image: "/artists/iuliana-beregoi.png",
    flag: {
      direction: "right",
      className: "bg-go-blue fill-go-blue"
    },
    text: {
      direction: "left",
      position: "bottom",
      className: "text-muted text-[65px] leading-[50px] ml-8"
    }
  }
];

export const LINEUP_ARTISTS = [
  ARTISTS[6], // Mihail
  ARTISTS[3], // Carla's Dreams
  ARTISTS[0], // Irina Rimes
  ARTISTS[4], // Satoshi
  ARTISTS[10], // Tania Turtureanu
  ARTISTS[9], // Dara
  ARTISTS[2], // Zdob și Zdub
  ARTISTS[5], // Misha Miller
  ARTISTS[8], // The Urs
  ARTISTS[12], // Iuliana Beregoi
  ARTISTS[1], // Alternosfera
  ARTISTS[7], // Magnat & Feoctist
  ARTISTS[11] // Marej
];
