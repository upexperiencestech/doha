import { Star } from "lucide-react";

type StarIconProps = {
  color?: string;
  size?: number; // in pixels
  className?: string;
};

export function StarIcon({ color = "#FFC107", size = 12, className = "" }: StarIconProps) {
  return <Star color={color} size={size} className={className} fill={color} />;
}

export default StarIcon;
