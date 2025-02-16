export interface Artist {
  name: string;
  displayName?: string;
  image: string;
  flag: {
    direction: "left" | "right" | "bottom";
    className?: string;
  };
  text: {
    direction: "left" | "right";
    position: "top" | "bottom" | "center";
    className?: string;
  };
}
