import { useRef, useState } from "react";
import MoldovaMap from "./map";
import PinCursor from "./pin-cursor";

interface MapOverlayProps {
  isMapVisible: boolean;
  setIsMapVisible: (value: boolean) => void;
  cursorPosition: { x: number; y: number };
  ref: React.RefObject<HTMLDivElement | null>;
}

const MapOverlay: React.FC<MapOverlayProps> = ({ ref, isMapVisible, setIsMapVisible, cursorPosition }) => {
  const [isOverMap, setIsOverMap] = useState(false);
  const mapRef = useRef<SVGSVGElement>(null);

  const handleMapMouseEnter = () => setIsOverMap(true);
  const handleMapMouseLeave = () => setIsOverMap(false);

  const handleMapClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains("land")) {
      setIsMapVisible(false);
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    const mapElement = mapRef.current;
    if (mapElement) {
      const mapRect = mapElement.getBoundingClientRect();
      const isClickInMap =
        e.clientX >= mapRect.left &&
        e.clientX <= mapRect.right &&
        e.clientY >= mapRect.top &&
        e.clientY <= mapRect.bottom;
      if (!isClickInMap) {
        setIsMapVisible(false);
      }
    }
  };

  return (
    <div
      className="bg-background scrollbar scrollbar-thumb-background scrollbar-track-background fixed top-0 left-0 z-10 hidden h-[100dvh] w-screen items-center justify-center overflow-y-scroll lg:flex"
      onClick={handleOutsideClick}
      style={{ cursor: isOverMap ? "none" : "default" }}
      ref={ref}
    >
      <PinCursor x={cursorPosition.x} y={cursorPosition.y} isVisible={isOverMap} />
      <div className="flex items-center">
        <img
          src="/images/nascut-in.svg"
          alt="Născut în Moldova"
          className="3xl:!w-[350px] 1.5xl:w-[300px] 4xl:-mr-24 -mr-20 w-[280px]"
        />
        <MoldovaMap
          ref={mapRef}
          onMouseEnter={handleMapMouseEnter}
          onMouseLeave={handleMapMouseLeave}
          onClick={handleMapClick}
          isOpen={isMapVisible}
        />
      </div>
    </div>
  );
};

export default MapOverlay;
