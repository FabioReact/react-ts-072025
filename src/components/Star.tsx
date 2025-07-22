import { Star as LucideStart } from "lucide-react";

type Props = {
  filled?: boolean;
  onSelect?: () => void;
  onUnSelect?: () => void;
  color?: string;
};

const Star = ({ filled = false, onSelect, onUnSelect, color = "gold" }: Props) => {
  if (filled) {
    return <LucideStart onClick={onUnSelect} fill={color} color={color} />;
  }
  return <LucideStart onClick={onSelect} fill="white" color={color} />;
};

export default Star;
