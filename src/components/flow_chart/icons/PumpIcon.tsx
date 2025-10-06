type Props = {
  color?: string;
  width?: number | string;
  height?: number | string;
  statusColor?: string;
};

const PumpIcon = ({ color, width, height, statusColor }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 61 56.000099999999975"
      width={width}
      height={height}
      fill={color}
      stroke="#000"
      strokeWidth={1}
    >
      <rect
        x="0"
        y="0"
        width="35"
        height="10"
        transform="translate(25.5 0.5)"
      />
      <path
        d="M 0 10 L 40.0001 10.0001 L 35 0.0001 L 5.0001 0 Z"
        transform="translate(5.5 45.5)"
      />
      <ellipse cx="25" cy="25" rx="25" ry="25" transform="translate(0.5 0.5)" />
      <ellipse
        cx="6.25"
        cy="6.25"
        rx="6.25"
        ry="6.25"
        stroke="#000"
        fill={statusColor}
        transform="translate(20.5 20.5)"
      />
    </svg>
  );
};

export default PumpIcon;
