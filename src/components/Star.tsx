import { Star as LucideStart } from "lucide-react";

type Props = {
  filled?: boolean;
  onSelect?: () => void;
  onUnSelect?: () => void;
  color?: string;
};

const Star = ({ filled = false, onSelect, onUnSelect, color = "gold" }: Props) => {
  if (filled) {
    return <LucideStart role="checkbox" aria-selected="true" onClick={onUnSelect} fill={color} color={color} />;
  }
  return <LucideStart role="checkbox" aria-selected="false" onClick={onSelect} fill="white" color={color} />;
};

export default Star;
