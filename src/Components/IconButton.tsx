// this is main button with gradient background. It can hold children components.
import { ReactNode } from "react"

interface IconButtonProps {
  customStyle?: String,
  children: ReactNode,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
}

const IconButton: React.FC<IconButtonProps> = ({ customStyle = '', children, onClick }) => {
  return (
    <div onClick={onClick} className={`flex flex-col items-center justify-center gap-1 w-[54px] h-[54px] text-white text-[8px] 
      rounded-[8.5px] bg-[linear-gradient(142.34deg,#342E51_18.77%,#221E38_100%)] cursor-pointer hover:opacity-100 duration-200 ${customStyle}`}>
      {children}
    </div>
  );
};

export default IconButton;