// this is card component with rounded gradient border. It can hold children components.
import { ReactNode } from "react"
import Button from "./Button"

interface HireCardProps {
  customStyle?: String,
  children?: ReactNode,
  src: string,
  name: string,
  bio: string,
  nation: string
}

const HireCard: React.FC<HireCardProps> = ({ customStyle = '', children, src, name, bio, nation }) => {
  return (
    <div className={`flex flex-col w-[281px] items-center justify-center px-[50px] py-[42px]  
      border-[1px] border-gradient`}>
      <img className="w-[66px] h-[66px]" src={src} alt=""></img>
      <p className="text-white text-[21px] mt-[19px]">{name}</p>
      <p className="text-[14px] text-[#585276] leading-[16.5px] text-center mt-[9px]">{bio}</p>
      <div className="flex items-center justify-center mt-[19px] gap-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_2_637)">
          <path fillRule="evenodd" clipRule="evenodd" d="M7.75 15.3019C7.75 15.3019 1.9375 12.261 1.9375 6.26025C1.9375 3.05014 4.53989 0.447754 7.75 0.447754C10.9601 0.447754 13.5625 3.05014 13.5625 6.26025C13.5625 12.261 7.75 15.3019 7.75 15.3019ZM7.75 1.09359C4.90123 1.09359 2.58333 3.41148 2.58333 6.26025C2.58333 11.0259 6.60752 13.8491 7.75097 14.555C8.89539 13.852 12.9167 11.041 12.9167 6.26025C12.9167 3.41148 10.5988 1.09359 7.75 1.09359ZM7.75 9.1665C6.14478 9.1665 4.84375 7.86547 4.84375 6.26025C4.84375 4.65504 6.14478 3.354 7.75 3.354C9.35522 3.354 10.6562 4.65504 10.6562 6.26025C10.6562 7.86547 9.35522 9.1665 7.75 9.1665ZM7.75 3.99984C6.5016 3.99984 5.48958 5.01186 5.48958 6.26025C5.48958 7.50865 6.5016 8.52067 7.75 8.52067C8.9984 8.52067 10.0104 7.50865 10.0104 6.26025C10.0104 5.01186 8.9984 3.99984 7.75 3.99984Z" fill="#E200A6"/>
          </g>
          <defs>
          <clipPath id="clip0_2_637">
          <rect width="15.5" height="15.5" fill="white" transform="translate(0 0.125)"/>
          </clipPath>
          </defs>
        </svg>
        <p className="text-[14px] text-[#585276] leading-[18px] text-center">{nation}</p>
      </div>

      <div className="flex items-center gap-3 mt-5">
        <div className="cursor-pointer hover:scale-105 duration-200 rounded-[50%] w-8 h-8 bg-[#7438B0] flex items-center justify-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect x="0.650269" y="0.582031" width="15.34" height="15.34" fill="url(#pattern0_3_391)"/>
            <defs>
              <pattern id="pattern0_3_391" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use href="#image0_3_391" transform="scale(0.025)"/>
              </pattern>
              <image id="image0_3_391" width="40" height="40" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOnRFWHRDb21tZW50AHhyOmQ6REFGNnlQandkZ1k6NCxqOjkzMDQwOTgwNTA4MTMzMjY0Mix0OjI0MDEyNDA5U9KczwAABOZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgogICAgICAgIDxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICAgICAgICA8ZGM6dGl0bGU+CiAgICAgICAgPHJkZjpBbHQ+CiAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAxPC9yZGY6bGk+CiAgICAgICAgPC9yZGY6QWx0PgogICAgICAgIDwvZGM6dGl0bGU+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICAgICAgICA8QXR0cmliOkFkcz4KICAgICAgICA8cmRmOlNlcT4KICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyNC0wMS0yNDwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgICAgPEF0dHJpYjpFeHRJZD4yN2M2YjM1ZC1mZmMzLTQ5MTktOTMyMC0yOTc1ZmI4Y2QzMjE8L0F0dHJpYjpFeHRJZD4KICAgICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgICAgIDwvcmRmOmxpPgogICAgICAgIDwvcmRmOlNlcT4KICAgICAgICA8L0F0dHJpYjpBZHM+CiAgICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CgogICAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgICAgICAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICAgICAgICA8cGRmOkF1dGhvcj5SZWQgSm9objwvcGRmOkF1dGhvcj4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KCiAgICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICAgICAgICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgICAKICAgICAgICA8L3JkZjpSREY+CiAgICAgICAgPC94OnhtcG1ldGE+XlAIGAAABTBJREFUeJzVmFuoXFcZx3//yYmmSWsSSwOKlt4IRYy2SlNaNXttiaQq6c1Iah6MD7WS2Av1wZcqs+alDxJRQkBKqHJA1IBWvLQpzcOsTaCFJDUtpaWigYTkwdqKtklMy+mZfx/23ic7c6bnzDlzTOIHw8ys2ftbv/XdZ4uLXHShAWaT1oUG6Jcsy7CNbXW73YvDgu12G4AY42LgWuCbwMeBHRcUsN1uE2MEWAV8HdgE3AJ8ALDtl887YANqGXAD8C3bWyQt4WxOCDAwMXa+wWxfBdwL3GH7ekmLJNVQ/fL3/ylgw1qXA4EytjYAiwHNAFbLswsO2Aj4lu1PAg/Yvg34CNBqQNm2KUkHgRo4uGCADWtdaft22/dIWgssomEt25Zk25PAH4AusHMA4CTw0kiADWstA24CtgFfpkyAqYCv4KC0im0fl/RwSml/CGHPADjb/reko3PO4izLCCEQYxTwCWALcCewmrLwNzNxajdJ2J6QtBP4ke3lwK8kfZbpDcPAYWDt0BbsdruEEACuADLgPiAHWuX+gwO+dilwSNL9wCFgDfCEpKsH3VMBvghMztjqsiyj2+1iWyGEW4GfA4dt7wHWU8ZXq6I7Z6MqAXqSTtp+EPgicLA63L4G3Pt5cX9KiYEWbFjrGuArtrdKurFWOEt5cPU+CfwR+H5RFEdCCC3bdwK/AJbPoMPVq5gCrOMqhKAQwmLgS7a3Sfqc7Q8xIK4GkpVWs6QTwP0ppaeBCcoY+zbwY2BpM2veR44DR1NKqFEebqTshZtsX9enZDaF9anfBnYDj6aU/hljJKU0BvzQ9g8orT/rISX9CbhDEmMxxjXATtu3ShpjuArfr7Mn6QVge0rpUEqpl1IipfRBYIftbcPAUV5k4PmqSrgF7AXWSVrM2aAdBs5Ar6pX3wNCjPFAnuc13KW2f2l7u6TWMHD1aW2/UOmnBTwOvFZtVm88DNwEsFfS2pTSTkmnOp0O7XablNJHgacl3T2HA0MZv29LeqVeaAER+Axlsd0N/AvoVcB1bDXBerZPAJuBu2KMR/I8B8rsjzFeRemVWxjSrVPKSwO9Dhyr1wTndAeApcA64KuUE8hqYMw2ks4A40A7xvhGp9OZUt7tdhVC+BTwO8ryNKV/DmLgt8DmKhanK6hhAWKMS21fK2kj8AXbsSiKAyklD4BbD/za9spBhXtI6QEPpZR21V6ZVUm73Z6qkTHGc8CyLCOlBPAN4Ge2LxsBrg6nm2OMh+p95j3yZ1lGjLEVQvgO8FOqIXS++igT+HVgdZ7nbxZFAYzwt7Oyag78ZAHgavmbpP/WcDACYOXaa1gguKqDvBhjfLe5PirgKhbo6YTKMXuqQNcy6si/qu97f5GfSw20pOf710d59CFgZXMPznaYp2y/21iblQ84BbxSeWZBAAE+3ICw7bdsb6KcRLZSttChICU9B7zTTJBRAQ2saHz+j6TNRVH8OYQwmVL6je3P2z5ouzcTaNVSuymlab/PGzDGKNsrqv75BnB7SmlfnucuioI8z93pdI4A6yU9Stkl6sOcI1W7PpxSmhaz885A20ts/1VSD/haSukvdXtqSlXQFULYADwGfIy+Ccf2W5I+HUI42u/iUQAvsf1d4PdFURwZBNd3PRXcLtsb65ZYZe+rwE2STvffN28XSzpTFMWOPM9nhauuJ4RQj2mPACcruB7wDDANDi7AI+Da5VmW3SDpPuAk0AkhnO53L5T/a8+rHDt2jPHxcYB/hBCeBPaFECYGwcH/wUP0ix7wPUpwh2pLSW3VAAAAAElFTkSuQmCC"/>
            </defs>
          </svg>
        </div>
        <div className="cursor-pointer hover:scale-105 duration-200 rounded-[50%] w-8 h-8 bg-[#7438B0] flex items-center justify-center">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect x="0.151978" y="0.281982" width="15.9575" height="15.9575" fill="url(#pattern0_3_392)"/>
            <defs>
            <pattern id="pattern0_3_392" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_3_392" transform="scale(0.025)"/>
            </pattern>
            <image id="image0_3_392" width="40" height="40" href="data:image/png;base64,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"/>
            </defs>
          </svg>
        </div>
      </div>
      
      

      {/* <Button customStyle={'w-[189px] h-[42.5px] mt-[43px]'}>
        <span className="text-[15.5px] text-white">View Profile</span>
      </Button>    */}
    </div>
  );
};

export default HireCard;