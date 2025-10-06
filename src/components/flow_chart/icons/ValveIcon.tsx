type Props = {
  color?: string;
  width?: number | string;
  height?: number | string;
};

const ValveIcon = ({ color, width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 101.00009999999997 101.00009999999997"
      fill={color}
      strokeWidth={2}
      width={width}
      height={height}
    >
      <style></style>
      <path
        d="M 0 0 L 50.0001 25 L 0.0001 50 Z"
        stroke="#000"
        transform="translate(0.5 50.5)"
      />
      <path
        d="M 0 25.0001 L 50.0001 0 L 50 50.0001 Z"
        stroke="#000"
        transform="translate(50.5 50.5)"
      />
      <path
        d="M 0.00001 50 L 0 0"
        stroke="#000"
        transform="translate(50.5 25.5)"
      />
      <path
        d="M 50 0 Q 0 0 0 25 L 100 25 Q 100 0 50 0 Z"
        stroke="#000"
        transform="translate(0.5 0.5)"
      />
    </svg>
  );
};

export default ValveIcon;
