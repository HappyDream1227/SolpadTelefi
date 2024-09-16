// this is card component with rounded gradient border. It can hold children components.
import { ReactNode } from "react"

interface RoadmapCardProps {
  customStyle?: String,
  children?: ReactNode,
  title: string,
  content: string
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ customStyle = '', children, title, content }) => {
  return (
    <div className={`flex flex-col gap-8 w-[281px] h-[290px] items-center justify-center px-[22px]  
      border-[1px] border-gradient-2 bg-[#1D1933] rounded-[24px]`}>
      <p className="text-white text-[40px]">{title}</p>
      <p className="text-[15px] text-[#4A4465] leading-[19px] text-center">{content}</p>
    </div>
  );
};

export default RoadmapCard;