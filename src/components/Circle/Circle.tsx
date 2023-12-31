import CircleProps from "@/interfaces/circle";

const Circle = ({ radius, color, className }: CircleProps) => {
  return (
    <svg
      width={`calc(${radius}*2)`}
      height={`calc(${radius}*2)`}
      className={className}
    >
      <circle r={radius} cx={radius} cy={radius} fill={color} />
    </svg>
  );
};

export default Circle;
