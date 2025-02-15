import { useEffect, RefObject } from "react";
import gsap from "gsap";

const useMapAnimation = (
  welcomeRef: RefObject<HTMLDivElement | null>,
  overlayRef: RefObject<HTMLDivElement | null>,
  isMapVisible: boolean
) => {
  useEffect(() => {
    if (!welcomeRef.current || !overlayRef.current) return;

    const tl = gsap.timeline();

    if (isMapVisible) {
      tl.to(welcomeRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.inOut",
        display: "none"
      });
      tl.to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
          display: "flex"
        },
        "<"
      );
    } else {
      tl.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        display: "none"
      });
      tl.to(
        welcomeRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
          display: "flex"
        },
        "<"
      );
    }
  }, [isMapVisible, welcomeRef, overlayRef]);
};

export default useMapAnimation;
