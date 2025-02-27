import { cn } from "@/lib/utils";
import { type Artist } from "../types";
import { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

interface ArtistFlagProps {
  artist: Artist;
  className?: string;
}

function ArtistFlag({ artist, className }: ArtistFlagProps) {
  const { width } = useWindowSize();
  const isMobile = width && width < 1280;

  const getRotation = (direction: "left" | "right" | "bottom" | "top") => {
    switch (direction) {
      case "left":
        return "rotate-0";
      case "right":
        return "rotate-180";
      case "bottom":
        return "-rotate-90";
      case "top":
        return "rotate-90";
      default:
        return "rotate-0";
    }
  };

  const getTextPosition = (position: "top" | "bottom" | "center") => {
    switch (position) {
      case "top":
        return "top-5 left-5";
      case "bottom":
        return "bottom-0 sm:bottom-2 md:bottom-5 left-1/2 -translate-x-1/2";
      case "center":
        return "top-[45%] -translate-y-1/2 left-1/2 -translate-x-1/2";
      default:
        return "top-5";
    }
  };

  const getTextAlignment = (direction: "left" | "right") => {
    return direction === "left" ? "skew-x-[14deg]" : "skew-x-[-14deg]";
  };

  return (
    <div
      className={cn(
        "group relative h-[35vw] w-[35vw] transform overflow-hidden transition-all select-none md:h-[332px] md:w-[333px]",
        className
      )}
      role={isMobile ? "button" : undefined}
      tabIndex={isMobile ? 0 : undefined}
    >
      <div
        className={cn(
          "absolute inset-0 transition-transform duration-300 select-none",
          getRotation(artist.flag.direction)
        )}
      >
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

      <div className="absolute -inset-[1px] overflow-hidden select-none hover:opacity-0">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover transition-opacity duration-300 select-none group-hover:opacity-0 group-focus:opacity-0 group-active:opacity-0 lg:scale-[1.01]"
        />
      </div>

      <div
        className={cn(
          "absolute w-full opacity-0 transition-opacity duration-300 select-none group-hover:opacity-100 group-focus:opacity-100 group-active:opacity-100",
          getTextPosition(artist.text.position),
          getTextAlignment(artist.text.direction)
        )}
      >
        <h3
          className={cn(
            "w-full scale-[45%] transform text-[80px] leading-[0.75] font-[950] tracking-[-0.05em] whitespace-pre-line uppercase select-none sm:scale-80 md:scale-100",
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
