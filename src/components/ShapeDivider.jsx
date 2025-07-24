import React from 'react';

/**
 * ShapeDivider Component
 * 
 * A reusable component for adding decorative shape dividers between sections
 * 
 * @param {Object} props Component props
 * @param {string} props.type The type of divider to display (wave, curve, angle, triangle, etc.)
 * @param {string} props.position Whether the divider should be at the top or bottom of a section
 * @param {string} props.color The color of the divider (tailwind class or hex)
 * @param {string} props.height The height of the divider in pixels or tailwind class
 * @param {boolean} props.flip Whether to flip the divider horizontally
 * @param {string} props.className Additional classes to apply to the divider
 * @returns {JSX.Element} The rendered component
 */
const ShapeDivider = ({ 
  type = 'wave', 
  position = 'bottom',
  color = 'text-creamyNeutral',
  height = 'h-16',
  flip = false,
  className = '',
}) => {
  // Determine the SVG path based on the type
  const getPath = () => {
    switch(type) {
      case 'wave':
        return "M0,0V30H1200V0C1050,20,950,15,900,10C800,5,750,10,650,15C550,20,500,5,400,5C300,5,200,15,100,10C50,7.5,0,0,0,0Z";
      case 'gentle-wave':
        return "M0,0V20H1200V0C1000,25,800,10,600,20C400,30,200,10,0,0Z";
      case 'curve':
        return "M0,0V30H1200V0S900,90,600,30,300,90,0,30Z";
      case 'angle':
        return "M0,0V30L1200,0Z";
      case 'triangle':
        return "M600,30L1200,0H0Z";
      case 'rounded':
        return "M0,0V30H1200V0C1000,40,800,30,600,30S200,40,0,0Z";
      case 'asymmetric':
        return "M0,0V30H1200V0C900,60,700,0,500,30S100,10,0,0Z";
      case 'tilt':
        return "M0,30L1200,0V30H0Z";
      case 'arrow':
        return "M0,0H1200V30H0V0ZM600,30L800,0H400Z";
      default:
        return "M0,0V30H1200V0C1050,20,950,15,900,10C800,5,750,10,650,15C550,20,500,5,400,5C300,5,200,15,100,10C50,7.5,0,0,0,0Z";
    }
  };

  // Determine the transform based on position and flip
  const getTransform = () => {
    let transform = '';
    
    if (position === 'top') {
      transform += 'rotate(180deg) ';
    }
    
    if (flip) {
      transform += 'scaleX(-1) ';
    }
    
    return transform.trim();
  };

  return (
    <div 
      className={`absolute ${position}-0 left-0 w-full overflow-hidden leading-0 ${className}`}
      aria-hidden="true"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 30" 
        preserveAspectRatio="none" 
        className={`relative block w-full ${height} ${color} fill-current`}
        style={{ transform: getTransform() }}
      >
        <path d={getPath()}></path>
      </svg>
    </div>
  );
};

export default ShapeDivider;