import { cn } from "@/lib/utils";
import { type Artist } from "../types";

interface ArtistFlagProps {
  artist: Artist;
  className?: string;
}

function ArtistFlag({ artist, className }: ArtistFlagProps) {
  const getRotation = (direction: "left" | "right" | "bottom") => {
    switch (direction) {
      case "left":
        return "rotate-0";
      case "right":
        return "rotate-180";
      case "bottom":
        return "-rotate-90";
      default:
        return "rotate-0";
    }
  };

  const getTextPosition = (position: "top" | "bottom" | "center") => {
    switch (position) {
      case "top":
        return "top-5 left-5";
      case "bottom":
        return "bottom-2 left-1/2 -translate-x-1/2";
      case "center":
        return "top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2";
      default:
        return "top-2";
    }
  };

  const getTextAlignment = (direction: "left" | "right") => {
    return direction === "left" ? "skew-x-[14deg]" : "skew-x-[-14deg]";
  };

  return (
    <div className={cn("group relative h-[332px] w-[333px] transform", className)}>
      <div className={cn("absolute inset-0 transition-transform duration-300", getRotation(artist.flag.direction))}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 333 332"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M332.143 0L332.143 331.643L0.499958 331.643L98.5705 165.822L0.500031 -7.24829e-05L332.143 0Z"
            className={artist.flag.className}
          />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
      </div>

      <div
        className={cn(
          "absolute w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          getTextPosition(artist.text.position),
          getTextAlignment(artist.text.direction)
        )}
      >
        <h3
          className={cn(
            "w-full text-[80px] leading-[0.75] font-[900] tracking-[-0.05em] whitespace-pre-line uppercase select-none",
            artist.text.className
          )}
        >
          {artist.displayName || artist.name}
        </h3>
      </div>
    </div>
  );
}

export default ArtistFlag;
