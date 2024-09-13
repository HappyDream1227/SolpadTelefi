import { useContext } from "react"
import { MainContext } from "../App"
import Button from "../Components/Button"
export default function Header () {
  const _MainContext= useContext(MainContext)

  return (
    <div className="bg-[#141129] flex justify-center ">
      <div className="w-[1440px] h-[140px] bg-[#1D1933] flex items-center justify-between px-[98px]">
        <svg width="143" height="30" viewBox="0 0 143 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.0328 30L12.9864 7.13465H0.9276V2.68217H31.2601V7.13465H19.1549V30H13.0328ZM38.7875 30C37.2415 30 36.051 29.799 35.2162 29.3971C34.3814 28.9951 33.7784 28.4849 33.4074 27.8665C33.0673 27.2481 32.8508 26.5988 32.7581 25.9186C32.6962 25.2383 32.6653 24.6199 32.6653 24.0634V15.1584C32.6653 14.6946 32.6962 14.138 32.7581 13.4887C32.8508 12.8085 33.0673 12.1437 33.4074 11.4944C33.7784 10.8451 34.3814 10.304 35.2162 9.87107C36.082 9.43819 37.2724 9.22175 38.7875 9.22175H48.7592C50.7999 9.22175 52.3923 9.42273 53.5363 9.82469C54.7113 10.1957 55.5307 10.8141 55.9945 11.6799C56.4892 12.5457 56.7365 13.7052 56.7365 15.1584V22.0226H48.62C45.8372 22.0226 43.5646 21.9608 41.8022 21.8371C40.0706 21.7134 38.9111 21.6361 38.3237 21.6052V24.1561C38.2927 25.3929 39.0348 26.0113 40.5499 26.0113H42.9153C44.585 26.0113 46.2083 25.9959 47.7852 25.9649C49.393 25.9031 50.8617 25.8413 52.1913 25.7794C53.5208 25.6867 54.5876 25.6094 55.3915 25.5475L57.2467 28.5622C57.2467 29.5207 54.2011 30 48.1098 30H38.7875ZM38.3237 18.034H51.0782V15.0656C51.0782 14.4472 51.0009 14.0144 50.8463 13.767C50.7226 13.5196 50.3206 13.365 49.6404 13.3032C48.9601 13.2414 47.8006 13.2104 46.1619 13.2104H40.5499C39.0657 13.2104 38.3237 13.8288 38.3237 15.0656V18.034ZM62.3539 30V4.30547L61.8901 0.595069H68.0123V30H62.3539ZM79.2341 30C77.6881 30 76.4977 29.799 75.6628 29.3971C74.828 28.9951 74.2251 28.4849 73.854 27.8665C73.5139 27.2481 73.2975 26.5988 73.2047 25.9186C73.1429 25.2383 73.1119 24.6199 73.1119 24.0634V15.1584C73.1119 14.6946 73.1429 14.138 73.2047 13.4887C73.2975 12.8085 73.5139 12.1437 73.854 11.4944C74.2251 10.8451 74.828 10.304 75.6628 9.87107C76.5286 9.43819 77.719 9.22175 79.2341 9.22175H89.2058C91.2465 9.22175 92.8389 9.42273 93.9829 9.82469C95.1579 10.1957 95.9773 10.8141 96.4411 11.6799C96.9358 12.5457 97.1832 13.7052 97.1832 15.1584V22.0226H89.0667C86.2839 22.0226 84.0112 21.9608 82.2488 21.8371C80.5173 21.7134 79.3578 21.6361 78.7703 21.6052V24.1561C78.7394 25.3929 79.4815 26.0113 80.9965 26.0113H83.3619C85.0316 26.0113 86.6549 25.9959 88.2318 25.9649C89.8397 25.9031 91.3084 25.8413 92.6379 25.7794C93.9675 25.6867 95.0342 25.6094 95.8381 25.5475L97.6933 28.5622C97.6933 29.5207 94.6477 30 88.5565 30H79.2341ZM78.7703 18.034H91.5248V15.0656C91.5248 14.4472 91.4475 14.0144 91.2929 13.767C91.1692 13.5196 90.7673 13.365 90.087 13.3032C89.4068 13.2414 88.2473 13.2104 86.6085 13.2104H80.9965C79.5124 13.2104 78.7703 13.8288 78.7703 15.0656V18.034ZM103.728 30V6.43895L103.264 2.72855H132.206V7.18103H109.85V13.9525H127.196V18.5441H109.85V30H103.728ZM139.192 6.29981C138.048 6.29981 137.213 6.06791 136.687 5.60411C136.162 5.14031 135.899 4.36731 135.899 3.28511C135.899 2.17199 136.146 1.39899 136.641 0.966108C137.167 0.502308 138.017 0.270408 139.192 0.270408C140.367 0.270408 141.217 0.502308 141.743 0.966108C142.268 1.39899 142.531 2.17199 142.531 3.28511C142.531 4.33639 142.268 5.10939 141.743 5.60411C141.217 6.06791 140.367 6.29981 139.192 6.29981ZM136.363 30V9.22175H142.021V30H136.363Z" fill="url(#paint0_linear_2_611)"/>
          <defs>
          <linearGradient id="paint0_linear_2_611" x1="12.4496" y1="-12" x2="163.558" y2="34.8197" gradientUnits="userSpaceOnUse">
          <stop stopColor="#527FF7"/>
          <stop offset="0.21" stopColor="#B251ED"/>
          <stop offset="0.635" stopColor="#F53E8E"/>
          <stop offset="1" stopColor="#FD6C5D"/>
          </linearGradient>
          </defs>
        </svg>

        <div className="flex w-[476px] h-[48px] px-4 items-center gap-2 border-[1px] bg-[#171429] border-[#443d66] rounded-[30px]">
          <svg width="14" height="14" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.64217 12.5172C8.03078 12.517 9.37938 12.0521 10.4732 11.1967L13.9123 14.6358L15.0185 13.5296L11.5794 10.0905C12.4353 8.9965 12.9005 7.64759 12.9008 6.25862C12.9008 2.80777 10.093 0 6.64217 0C3.19132 0 0.383545 2.80777 0.383545 6.25862C0.383545 9.70947 3.19132 12.5172 6.64217 12.5172ZM6.64217 1.56466C9.23089 1.56466 11.3361 3.6699 11.3361 6.25862C11.3361 8.84734 9.23089 10.9526 6.64217 10.9526C4.05344 10.9526 1.9482 8.84734 1.9482 6.25862C1.9482 3.6699 4.05344 1.56466 6.64217 1.56466Z" fill="#443E66"/>
          </svg>

          <input type="number" className={`text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
            resize-none focus:outline-none w-full bg-[#171429] placeholder-[#443d66] text-[16px]`}
            placeholder="search..." onChange={(e) => _MainContext.search.handleSearch(e.target.value)} value={_MainContext.search.search}></input>
        </div>

        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3333 41.1665H28.6667C34.7333 41.1665 39.5 36.3998 39.5 30.3332V21.6665C39.5 20.3665 38.6333 19.4998 37.3333 19.4998C36.0333 19.4998 35.1667 20.3665 35.1667 21.6665V30.3332C35.1667 34.0165 32.35 36.8332 28.6667 36.8332H11.3333C7.65 36.8332 4.83333 34.0165 4.83333 30.3332V12.9998C4.83333 9.3165 7.65 6.49984 11.3333 6.49984H20C21.3 6.49984 22.1667 5.63317 22.1667 4.33317C22.1667 3.03317 21.3 2.1665 20 2.1665H11.3333C5.26667 2.1665 0.5 6.93317 0.5 12.9998V30.3332C0.5 36.3998 5.26667 41.1665 11.3333 41.1665Z" fill="#443E66"/>
          <path d="M33 0C28.2334 0 24.3334 3.9 24.3334 8.66667C24.3334 13.4333 28.2334 17.3333 33 17.3333C37.7667 17.3333 41.6667 13.4333 41.6667 8.66667C41.6667 3.9 37.7667 0 33 0ZM33 13C30.6167 13 28.6667 11.05 28.6667 8.66667C28.6667 6.28333 30.6167 4.33333 33 4.33333C35.3834 4.33333 37.3334 6.28333 37.3334 8.66667C37.3334 11.05 35.3834 13 33 13Z" fill="#E200A6"/>
        </svg>

        <Button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.75 10.25H10.25V17.75H7.75V10.25H0.25V7.75H7.75V0.25H10.25V7.75H17.75V10.25Z" fill="white"/>
          </svg>
          <span className="text-[16px] text-white">Connect Wallet</span>
        </Button>

      </div>

    </div>
  )
}