// this is card component with rounded gradient border. It can hold children components.
import { ReactNode } from "react"

interface SwapCardProps {
  customStyle?: String,
  children?: ReactNode,
  number: number,
  title: string,
  content: string
}

const SwapCard: React.FC<SwapCardProps> = ({ customStyle = '', children, number, title, content }) => {
  return (
    <div className={`flex flex-col gap-7 w-[281px] items-center justify-center px-[26px] py-[56px]  
      border-[1px] border-gradient `}>
      <div className="flex items-center justify-center bg-[linear-gradient(97.58deg,#527FF7_-9.47%,#B251ED_24.58%,#F53E8E_93.49%,#FD6C5D_152.68%)] w-[69px] h-[39px] rounded-[44px]">
        <p className="text-white text-[24px]">{number}</p>
      </div>
      <p className="text-white text-[20px]">{title}</p>
      <p className="text-[14px] text-[#4A4465] leading-[16.5px] text-center">{content}</p>
    </div>
  );
};

export default SwapCard;