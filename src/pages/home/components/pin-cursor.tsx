import type React from "react";

interface PinCursorProps {
  x: number;
  y: number;
  isVisible: boolean;
}

const PinCursor: React.FC<PinCursorProps> = ({ x, y, isVisible }) => {
  return (
    <div
      className="pointer-events-none fixed z-50 transition-opacity duration-300"
      style={{
        left: x,
        top: y,
        opacity: isVisible ? 1 : 0,
        transform: "translate(-4px, -76px)"
      }}
    >
      <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse
          cx="2.57915"
          cy="118.522"
          rx="1.92019"
          ry="0.822819"
          transform="rotate(21.5755 2.57915 118.522)"
          fill="#051E17"
          fillOpacity="0.5"
        />
        <path d="M3.47487 116.57L90.0955 25L95.0452 29.9498L3.47487 116.57Z" fill="#F06534" />
        <circle cx="101.5" cy="18.5" r="18.5" fill="#005FFF" />
      </svg>
    </div>
  );
};

export default PinCursor;
