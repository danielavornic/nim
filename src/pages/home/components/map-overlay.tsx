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
      className="bg-background scrollbar scrollbar-thumb-background scrollbar-track-background fixed top-0 left-0 hidden h-[100dvh] w-screen items-center justify-center overflow-y-scroll lg:flex"
      onClick={handleOutsideClick}
      style={{ cursor: isOverMap ? "none" : "default" }}
      ref={ref}
    >
      <PinCursor x={cursorPosition.x} y={cursorPosition.y} isVisible={isOverMap} />
      <MoldovaMap
        ref={mapRef}
        onMouseEnter={handleMapMouseEnter}
        onMouseLeave={handleMapMouseLeave}
        onClick={handleMapClick}
        isOpen={isMapVisible}
      />
    </div>
  );
};

export default MapOverlay;
