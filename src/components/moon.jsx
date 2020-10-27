/**
 * Moon Icon
 * 
 * Credits to "phosphor-react"
 * @see "https://phosphoricons.com"
 */

import React, { forwardRef } from "react";

function renderPathForMoon(weight, color) {
  switch (weight) {
    case "bold":
      return (
        <>
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
          />
        </>
      );
    case "duotone":
      return (
        <>
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            opacity="0.2"
          />
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    case "fill":
      return (
        <>
          <path d="M228.25781,131.08594a7.97081,7.97081,0,0,0-7.875-.89844,72.03888,72.03888,0,0,1-94.58594-94.57031,7.99837,7.99837,0,0,0-8.14062-11.10938A104.00405,104.00405,0,1,0,231.49219,138.32813,7.99431,7.99431,0,0,0,228.25781,131.08594Z" />
        </>
      );
    case "light":
      return (
        <>
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="12"
          />
        </>
      );
    case "thin":
      return (
        <>
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </>
      );
    case "regular":
      return (
        <>
          <path
            d="M223.532,137.53892A96.00374,96.00374,0,1,1,118.449,32.46915l.00005.00075a80.03385,80.03385,0,0,0,105.08326,105.069Z"
            fill="none"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </>
      );
    default:
      console.error(
        'Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'
      );
      return null;
  }
};

const Moon = forwardRef((props, ref) => {
  const { color, size, weight, mirrored, ...rest } = props;
  
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size || "1em"}
      height={size || "1em"}
      fill={color || "currentColor"}
      viewBox="0 0 256 256"
      transform={mirrored || false ? "scale(-1, 1)" : undefined}
      {...rest}
    >
      <rect width="256" height="256" fill="none" />
      {renderPathForMoon(weight || "regular", color || "currentColor")}
    </svg>
  );
});

Moon.displayName = "Moon";
export default Moon;