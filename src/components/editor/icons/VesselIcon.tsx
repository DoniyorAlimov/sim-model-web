import { useEffect, useState } from "react";

type Props = {
  color?: string;
  width?: number | string;
  height?: number | string;
  indicatorColor?: string;
  level?: number;
};

const VesselIcon = ({
  color,
  width,
  height,
  indicatorColor = "green",
  level = 0,
}: Props) => {
  const [fillHeight, setFillHeight] = useState(0);

  const rectWidth = 3.5 * 3.7795; // mm -> px (approx, since 1mm ≈ 3.7795px)
  const rectHeight = 24 * 3.7795;

  useEffect(() => {
    setFillHeight((rectHeight * Math.min(100, level)) / 100);
  }, [level]);

  // scaled height based on level
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 76.5906821279932 155.96390000000008"
      fill={color}
      stroke="#000"
      strokeWidth={1}
    >
      <rect
        x="0mm"
        y="0mm"
        width="20mm"
        height="31mm"
        stroke="#000"
        transform="translate(0.5 19.3977)"
      />
      <path
        d="M 0.0001 18.9009 Q 0 0 37.7953 0 Q 75.5906 0 75.5906 18.8976 Z"
        stroke="#000"
        transform="translate(0.5 0.5)"
      />
      <path
        d="M 75.5906 18.9009 Q 75.5907 0 37.7954 0 Q 0.0001 0 0.0001 18.8976 Z"
        stroke="#000"
        transform="translate(0.5001 136.563) rotate(180 37.7953 9.4504)"
      />
      <rect
        x="0mm"
        y="0mm"
        width="3.5mm"
        height="24mm"
        transform="translate(51.5237 32.626)"
      />
      <rect
        x="0"
        y={rectHeight - fillHeight} // start filling from bottom
        width={rectWidth}
        height={fillHeight}
        fill={indicatorColor}
        transform="translate(51.5237 32.626)"
      />
    </svg>
  );
};

export default VesselIcon;
