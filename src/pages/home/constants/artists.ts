import { Artist } from "../types";

export const ARTISTS: Artist[] = [
  {
    name: "Irina Rimes",
    image: "/images/artists/irina-rimes.png",
    flag: {
      direction: "bottom",
      className: "bg-muted fill-muted"
    },
    text: {
      direction: "right",
      position: "top",
      className: "text-go-dark-green -ml-[5vw] -mt-7 sm:m-0"
    }
  },
  {
    name: "Alternosfera",
    image: "/images/artists/alternosfera.png",
    flag: {
      direction: "bottom",
      className: "bg-accent fill-accent"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-go-blue text-center leading-[0.75] -ml-[6vw] sm:ml-0 text-[44px]"
    }
  },
  {
    name: "Zdob și Zdub",
    image: "/images/artists/zdob-and-zdub.png",
    flag: {
      direction: "bottom",
      className: "bg-go-dark-green fill-go-dark-green"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-accent -mt-7 -ml-[2vw] sm:ml-2 sm:-mt-10 md:m-0 md:pl-12"
    }
  },
  {
    name: "Carla's Dreams",
    image: "/images/artists/csd.png",
    flag: {
      direction: "right",
      className: "bg-secondary fill-secondary"
    },
    text: {
      direction: "right",
      position: "top",
      className: "text-go-dark-green text-[65px] -ml-[13vw] -mt-8 sm:-ml-[3vw] sm:-mt-4 md:m-0 leading-[50px]"
    }
  },
  {
    name: "Satoshi",
    image: "/images/artists/satoshi.png",
    flag: {
      direction: "left",
      className: "bg-accent fill-accent"
    },
    text: {
      direction: "right",
      position: "bottom",
      className: "text-go-blue text-[65px] text-center leading-[50px] -ml-[2vw] sm:ml-0"
    }
  },
  {
    name: "Misha Miller",
    image: "/images/artists/misha-miller.png",
    flag: {
      direction: "right",
      className: "fill-go-neon-green xl:fill-go-blue"
    },
    text: {
      direction: "left",
      position: "bottom",
      className: "text-background xl:text-muted text-[65px] leading-[50px] -ml-[5vw] sm:ml-[2vw] md:ml-10"
    }
  },
  {
    name: "Mihail",
    image: "/images/artists/mihail.png",
    flag: {
      direction: "bottom",
      className: "bg-go-blue fill-go-blue "
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-muted text-center -ml-[5vw] sm:ml-0"
    }
  },
  {
    name: "Magnat & Feoctist",
    image: "/images/artists/magnat-feoctist.png",
    flag: {
      direction: "bottom",
      className: "bg-muted fill-muted"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-background text-[60px] leading-[50px] -ml-[5vw] sm:ml-0 -mt-4 md:mt-0 md:ml-12"
    }
  },
  {
    name: "The Urs",
    displayName: "The\nUrs",
    image: "/images/artists/the-urs.png",
    flag: {
      direction: "right",
      className: "bg-go-blue fill-go-blue xl:fill-accent"
    },
    text: {
      direction: "right",
      position: "center",
      className: "text-muted -ml-[3vw] sm:ml-2 md:ml-12 xl:text-go-blue"
    }
  },
  {
    name: "Dara",
    image: "/images/artists/dara.png",
    flag: {
      direction: "left",
      className: "bg-secondary fill-secondary"
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-go-blue ml-[2vw] sm:ml-[8vw] md:ml-32"
    }
  },
  {
    name: "Tania Turtureanu",
    displayName: "Tania Turtureanu",
    image: "/images/artists/tania.png",
    flag: {
      direction: "left",
      className: "bg-secondary fill-secondary"
    },
    text: {
      direction: "right",
      position: "bottom",
      className:
        "text-go-blue !text-[40px] !leading-[0.8] sm:!text-[42px] sm:!leading-[0.8] md:!leading-[36px] md:!text-[44px] -ml-2 sm:ml-5 md:ml-16"
    }
  },
  {
    name: "Maréj",
    displayName: "Maréj",
    image: "/images/artists/marej.png",
    flag: {
      direction: "right",
      className: "fill-primary"
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-background text-[65px] leading-[50px] -ml-[7vw] sm:-ml-3 md:ml-8"
    }
  },
  {
    name: "Iuliana Beregoi",
    displayName: "Iuliana Beregoi",
    image: "/images/artists/iuliana-beregoi.png",
    flag: {
      direction: "bottom",
      className: "bg-go-blue fill-go-blue"
    },
    text: {
      direction: "left",
      position: "center",
      className: "text-muted text-[65px] leading-[50px] -ml-[4vw] sm:ml-2 md:ml-12"
    }
  },
  {
    name: "Lupii lui Calancea",
    displayName: "Lupii lui Calancea",
    image: "/images/artists/lupii-calancea.png",
    flag: {
      direction: "top",
      className: "fill-accent"
    },
    text: {
      direction: "left",
      position: "bottom",
      className: "text-go-blue text-[65px] leading-[50px] ml-10"
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
  ARTISTS[13], // Lupii lui Calancea
  ARTISTS[11] // Marej
];

export const MOBILE_LINEUP_ARTISTS = [
  ARTISTS[3], // Carla's Dreams
  ARTISTS[0], // Irina Rimes
  ARTISTS[1], // Alternosfera
  ARTISTS[4], // Satoshi
  ARTISTS[2], // Zdob și Zdub
  ARTISTS[7], // Magnat & Feoctist
  ARTISTS[5], // Misha Miller
  ARTISTS[6], // Mihail
  ARTISTS[8], // The Urs
  ARTISTS[13], // Lupii lui Calancea
  ARTISTS[10], // Tania Turtureanu
  ARTISTS[9], // Dara
  ARTISTS[12], // Iuliana Beregoi
  ARTISTS[11] // Marej
];

export const HERO_ARTISTS = [
  ARTISTS[1], // Alternosfera
  ARTISTS[3], // Carla's Dreams
  ARTISTS[0], // Irina Rimes
  ARTISTS[13], // Lupii lui Calancea
  ARTISTS[7], // Magnat & Feoctist
  ARTISTS[4], // Satoshi
  ARTISTS[2], // Zdob și Zdub
  ARTISTS[9], // Dara
  ARTISTS[12], // Iuliana Beregoi
  ARTISTS[11], // Marej
  ARTISTS[6], // Mihail
  ARTISTS[5], // Misha Miller
  ARTISTS[10], // Tania Turtureanu
  ARTISTS[8] // The Urs,
];

export const SECONDARY_ARTISTS = [
  "Eva Timush",
  "Cleopatra Stratan cu Pavel Stratan",
  "Gândul Mâței",
  "Vanotek",
  "Sasha Lopez",
  "SunStroke Project",
  "Ion Suruceanu",
  "Ian Raiburg",
  "Lia Tăburcean",
  "Kapushon",
  "Akkord",
  "Nelly Ciobanu",
  "Catharsis",
  "Emilian Crețu/Dora Show",
  "Snails"
];
