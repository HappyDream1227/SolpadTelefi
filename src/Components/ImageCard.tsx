// this is card component with rounded gradient border. It can hold children components.
import { ReactNode } from "react"
import Button from "./Button"

interface ImageCardProps {
  customStyle?: String,
  children?: ReactNode,
  src: string,
  name: string,
  bio: string,
  nation: string
}

const ImageCard: React.FC<ImageCardProps> = ({ customStyle = '', children, src, name, bio, nation }) => {
  return (
    <div className={`flex flex-col w-[281px] items-center justify-center px-[50px] py-[42px]  
      border-[1px] border-gradient`}>
      <img className="w-[66px] h-[66px]" src={src} alt=""></img>
      <p className="text-white text-[21px] mt-[19px]">{name}</p>
      <p className="text-[14px] text-[#585276] leading-[16.5px] text-center mt-[9px]">{bio}</p>
      <div className="flex items-center justify-center mt-[19px] gap-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_637)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 15.3019C7.75 15.3019 1.9375 12.261 1.9375 6.26025C1.9375 3.05014 4.53989 0.447754 7.75 0.447754C10.9601 0.447754 13.5625 3.05014 13.5625 6.26025C13.5625 12.261 7.75 15.3019 7.75 15.3019ZM7.75 1.09359C4.90123 1.09359 2.58333 3.41148 2.58333 6.26025C2.58333 11.0259 6.60752 13.8491 7.75097 14.555C8.89539 13.852 12.9167 11.041 12.9167 6.26025C12.9167 3.41148 10.5988 1.09359 7.75 1.09359ZM7.75 9.1665C6.14478 9.1665 4.84375 7.86547 4.84375 6.26025C4.84375 4.65504 6.14478 3.354 7.75 3.354C9.35522 3.354 10.6562 4.65504 10.6562 6.26025C10.6562 7.86547 9.35522 9.1665 7.75 9.1665ZM7.75 3.99984C6.5016 3.99984 5.48958 5.01186 5.48958 6.26025C5.48958 7.50865 6.5016 8.52067 7.75 8.52067C8.9984 8.52067 10.0104 7.50865 10.0104 6.26025C10.0104 5.01186 8.9984 3.99984 7.75 3.99984Z" fill="#E200A6"/>
          </g>
          <defs>
          <clipPath id="clip0_2_637">
          <rect width="15.5" height="15.5" fill="white" transform="translate(0 0.125)"/>
          </clipPath>
          </defs>
        </svg>
        <p className="text-[14px] text-[#585276] leading-[18px] text-center">{nation}</p>
      </div>
      <Button customStyle={'w-[189px] h-[42.5px] mt-[43px]'}>
        <span className="text-[15.5px] text-white">View Profile</span>
      </Button>   
    </div>
  );
};

export default ImageCard;