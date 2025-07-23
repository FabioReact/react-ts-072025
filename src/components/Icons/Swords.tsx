import { Swords as LucideSwords } from "lucide-react";

type Props = {
  onClick?: () => void;
  color?: string;
};

const Swords = ({ onClick, color = "black" }: Props) => {
  return <LucideSwords className="cursor-pointer w-72" onClick={onClick} color={color} />;
};

export default Swords;
