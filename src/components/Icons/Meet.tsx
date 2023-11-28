import IconProps from "@/interfaces/icons";

const MeetIcon = ({ fill }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 125"
      x="0px"
      y="0px"
      fill={fill}
    >
      <path d="M83.65,46.76H65.52a2.89,2.89,0,0,0-2.09.86L49.8,61.24l-9.91-9.91V59.7l7.82,7.82a3,3,0,0,0,4.18,0L62.78,56.63v9a2.74,2.74,0,0,0,2.73,2.73H83.65a2.73,2.73,0,0,0,2.73-2.73V49.49A2.74,2.74,0,0,0,83.65,46.76Z" />
      <rect
        x="13.23"
        y="46.76"
        width="23.6"
        height="21.63"
        rx="2.73"
        ry="2.73"
      />
      <circle cx="25.03" cy="36.86" r="6.32" />
      <circle cx="25.03" cy="36.86" r="6.32" />
      <circle cx="74.58" cy="36.86" r="6.32" />
      <circle cx="74.58" cy="36.86" r="6.32" />
    </svg>
  );
};

export default MeetIcon;