import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import MapOverlay from "./components/map-overlay";
import useCursorPosition from "./hooks/use-cursor-position";
import useMapAnimation from "./hooks/use-map-animation";
import { useWindowSize } from "@uidotdev/usehooks";

const DESKTOP_WIDTH = 1024;

const HomePage = () => {
  const [isMapVisible, setIsMapVisible] = useState(true);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const cursorPosition = useCursorPosition();
  const { width } = useWindowSize();
  const isDesktop = width && width >= DESKTOP_WIDTH;

  useMapAnimation(welcomeRef, overlayRef, isMapVisible);

  return (
    <>
      <div
        ref={welcomeRef}
        className={cn("flex min-h-screen items-center justify-center", {
          "hidden opacity-0": !isDesktop,
          hidden: isDesktop && isMapVisible
        })}
      >
        <h1 className="text-4xl font-bold">Welcome to Moldova</h1>
      </div>

      {isDesktop && (
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
