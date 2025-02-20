import { useMeta } from "@/hooks/use-meta";
import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/about";
import FAQ from "./components/faq";
import Hero from "./components/hero";
import LineUpSection from "./components/lineup";
import MapOverlay from "./components/map-overlay";
import TicketsSection from "./components/tickets";
import useCursorPosition from "./hooks/use-cursor-position";
import useMapAnimation from "./hooks/use-map-animation";

const DESKTOP_WIDTH = 1024;
const MAP_VISIBILITY_KEY = "map-visibility-shown";

const HomePage = () => {
  const [isMapVisible, setIsMapVisible] = useState(() => {
    const hasBeenShown = sessionStorage.getItem(MAP_VISIBILITY_KEY);
    return hasBeenShown !== "true";
  });
  const [shouldMountMap, setShouldMountMap] = useState(true);

  const welcomeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const cursorPosition = useCursorPosition();
  const { width } = useWindowSize();
  const isDesktop = width && width >= DESKTOP_WIDTH;

  useMapAnimation(welcomeRef, overlayRef, isMapVisible);

  useEffect(() => {
    if (!isMapVisible) {
      sessionStorage.setItem(MAP_VISIBILITY_KEY, "true");
      window.scrollTo(0, 0);
      // after animation completes
      const timer = setTimeout(() => {
        setShouldMountMap(false);
      }, 500); // to match animation duration
      return () => clearTimeout(timer);
    } else {
      setShouldMountMap(true);
    }
  }, [isMapVisible]);

  useEffect(() => {
    const hasBeenShown = sessionStorage.getItem(MAP_VISIBILITY_KEY) === "true";
    if (hasBeenShown) {
      setShouldMountMap(false);
    }
  }, []);

  useMeta("home");

  return (
    <>
      <div
        ref={welcomeRef}
        className={cn("min-h-screen w-full overflow-hidden", {
          "hidden opacity-0": isMapVisible && isDesktop
        })}
      >
        <Hero key={isMapVisible ? "visible" : "hidden"} />
        <AboutSection />
        <LineUpSection />
        <TicketsSection />
        <FAQ />
      </div>

      {isDesktop && shouldMountMap && (
        <MapOverlay
          isMapVisible={isMapVisible}
          setIsMapVisible={setIsMapVisible}
          cursorPosition={cursorPosition}
          ref={overlayRef}
        />
      )}
    </>
  );
};

export default HomePage;
