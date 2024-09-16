// this is main button with gradient background. It can hold children components.
import { ReactNode } from "react"

interface ButtonProps {
  customStyle?: String,
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ customStyle = '', children }) => {
  return (
    <div className="relative inline-block group">
      <div className={`hover:scale-105 duration-300 flex items-center cursor-pointer justify-center gap-2 w-[183px] h-[66px] rounded-[14px] bg-[linear-gradient(97.58deg,#527FF7_-9.47%,#B251ED_24.58%,#F53E8E_93.49%,#FD6C5D_152.68%)] ${customStyle}`}>
        {children}
      </div>
      <div className="absolute w-32 p-2 text-sm text-white bg-black rounded top-20 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Coming soon
      </div>
    </div>
    
  );
};

export default Button;