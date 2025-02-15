import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import MapOverlay from "./components/map-overlay";
import useCursorPosition from "./hooks/use-cursor-position";
import useMapAnimation from "./hooks/use-map-animation";
import { useWindowSize } from "@uidotdev/usehooks";

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

  return (
    <>
      <div
        ref={welcomeRef}
        className={cn("flex min-h-screen items-center justify-center", {
          "hidden opacity-0": !isDesktop,
          hidden: isMapVisible
        })}
      >
        <h1 className="text-4xl font-bold">Welcome to Moldova</h1>
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
