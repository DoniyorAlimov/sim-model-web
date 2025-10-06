type Props = {
  color?: string;
  borderColor?: string;
  width?: number | string;
  height?: number | string;
};

const FlowIcon = ({ color, borderColor = 'black', width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="263.225 168.091 92.396 37"
      fill={color}
      stroke={borderColor}
      strokeWidth={2}
      width={width}
      height={height}
    >
      <path d="M 263.225 177.091 H 315.621 L 315.621 168.091 L 355.621 186.591 L 315.621 205.091 L 315.621 196.091 H 263.225 V 177.091 Z" />
    </svg>
  );
};

export default FlowIcon;
