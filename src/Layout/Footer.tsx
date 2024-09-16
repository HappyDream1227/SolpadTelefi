export default function Footer () {

  return (
    <div className="bg-[linear-gradient(97.58deg,#527FF7_-9.47%,#B251ED_24.58%,#F53E8E_93.49%,#FD6C5D_152.68%)] flex justify-center ">
      <div className="w-[1440px] h-[140px] flex items-center justify-between px-[98px]">
        <svg width="121" height="32" viewBox="0 0 121 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9432 32L12.8936 7.53734H-0.00759995V2.77382H32.4439V7.53734H19.4931V32H12.9432ZM40.497 32C38.843 32 37.5695 31.785 36.6763 31.3549C35.7831 30.9249 35.1381 30.3791 34.7411 29.7175C34.3772 29.0559 34.1457 28.3612 34.0464 27.6334C33.9803 26.9057 33.9472 26.2441 33.9472 25.6486V16.1216C33.9472 15.6254 33.9803 15.03 34.0464 14.3353C34.1457 13.6075 34.3772 12.8963 34.7411 12.2016C35.1381 11.5069 35.7831 10.928 36.6763 10.4649C37.6025 10.0018 38.8761 9.77024 40.497 9.77024H51.1653C53.3486 9.77024 55.0522 9.98526 56.2762 10.4153C57.5333 10.8123 58.4099 11.4739 58.9061 12.4001C59.4353 13.3263 59.7 14.5668 59.7 16.1216V23.4654H51.0165C48.0393 23.4654 45.6079 23.3992 43.7223 23.2669C41.8699 23.1346 40.6294 23.0519 40.0008 23.0188V25.7479C39.9678 27.0711 40.7617 27.7327 42.3826 27.7327H44.9132C46.6996 27.7327 48.4362 27.7161 50.1233 27.6831C51.8435 27.6169 53.4148 27.5507 54.8372 27.4846C56.2597 27.3853 57.4009 27.3026 58.261 27.2365L60.2458 30.4618C60.2458 31.4873 56.9874 32 50.4707 32H40.497ZM40.0008 19.198H53.6464V16.0224C53.6464 15.3608 53.5637 14.8976 53.3983 14.633C53.2659 14.3684 52.8359 14.203 52.1081 14.1368C51.3804 14.0706 50.1399 14.0376 48.3866 14.0376H42.3826C40.7948 14.0376 40.0008 14.6992 40.0008 16.0224V19.198ZM65.7098 32V4.51052L65.2136 0.540921H71.7635V32H65.7098ZM79.2041 32V6.79304L78.7079 2.82344H109.671V7.58696H85.754V14.8315H104.312V19.7439H85.754V32H79.2041ZM117.145 6.64418C115.921 6.64418 115.028 6.39608 114.466 5.89988C113.903 5.40368 113.622 4.57668 113.622 3.41888C113.622 2.228 113.887 1.401 114.416 0.937878C114.978 0.441679 115.888 0.193579 117.145 0.193579C118.402 0.193579 119.312 0.441679 119.874 0.937878C120.437 1.401 120.718 2.228 120.718 3.41888C120.718 4.5436 120.437 5.3706 119.874 5.89988C119.312 6.39608 118.402 6.64418 117.145 6.64418ZM114.118 32V9.77024H120.172V32H114.118Z" fill="white"/>
        </svg>


        <div className="flex gap-6">
          <svg className="cursor-pointer hover:scale-105 duration-200" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" fill="url(#pattern0_2_138)"/>
            <defs>
              <pattern id="pattern0_2_138" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_2_138" transform="scale(0.02)"/>
              </pattern>
              <image id="image0_2_138" width="50" height="50" href="data:image/png;base64,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"/>
            </defs>
          </svg>


          <svg className="cursor-pointer hover:scale-105 duration-200" width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect width="39" height="40" fill="url(#pattern0_2_139)"/>
            <defs>
              <pattern id="pattern0_2_139" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_2_139" transform="matrix(0.0205128 0 0 0.02 -0.0128205 0)"/>
              </pattern>
              <image id="image0_2_139" width="50" height="50" href="data:image/png;base64,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"/>
            </defs>
          </svg>

          <svg className="cursor-pointer hover:scale-105 duration-200" width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect width="39" height="40" fill="url(#pattern0_2_140)"/>
            <defs>
              <pattern id="pattern0_2_140" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_2_140" transform="matrix(0.0205128 0 0 0.02 -0.0128205 0)"/>
              </pattern>
            <image id="image0_2_140" width="50" height="50" href="data:image/png;base64,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"/>
            </defs>
          </svg>

          <svg className="cursor-pointer hover:scale-105 duration-200" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <rect width="40" height="40" fill="url(#pattern0_2_141)"/>
            <defs>
              <pattern id="pattern0_2_141" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0_2_141" transform="scale(0.02)"/>
              </pattern>
              <image id="image0_2_141" width="50" height="50" href="data:image/png;base64,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"/>
            </defs>
          </svg>


        </div>
        
        

      </div>

    </div>
  )
}