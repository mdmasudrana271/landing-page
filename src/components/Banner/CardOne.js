import React from "react";

const CardOne = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-5 bg-gradient-to-r from-slate-700 to-slate-900 md:w-80 w-full rounded-lg text-start p-4">
      <h1 className="font-semibold text-xl text-white">Last Transaction</h1>
      {/* drible logo and details  */}
      <div className="flex justify-between md:gap-16 gap-6 items-center">
        <div className="flex justify-center items-center gap-3">
          <span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_13_62)">
                <path
                  d="M20 1.32812C30.3125 1.32812 38.6562 9.67188 38.6562 19.9688C38.6562 30.2656 30.3125 38.625 20 38.625C9.6875 38.625 1.34375 30.2812 1.34375 19.9844C1.34375 9.6875 9.6875 1.32812 20 1.32812Z"
                  fill="#E74D89"
                />
                <path
                  d="M20 39.9531C8.96875 39.9531 0 31 0 19.9844C0 8.95312 8.96875 0 20 0C31.0312 0 40 8.95312 40 19.9688C40 30.9844 31.0312 39.9531 20 39.9531ZM36.8594 22.7031C36.2812 22.5156 31.5781 21.125 26.2188 21.9688C28.4531 28.0938 29.3594 33.0938 29.5312 34.125C33.375 31.5469 36.1094 27.4531 36.8594 22.7031ZM26.6719 35.7031C26.4219 34.2031 25.4219 28.9844 23.0312 22.7656C23 22.7812 22.9531 22.7969 22.9219 22.7969C13.2812 26.1562 9.82812 32.8281 9.51562 33.4531C12.4062 35.7031 16.0469 37.0469 20 37.0469C22.3594 37.0625 24.625 36.5781 26.6719 35.7031ZM7.3125 31.4062C7.70312 30.75 12.3906 23 21.2031 20.1406C21.4219 20.0625 21.6562 20 21.875 19.9375C21.4531 18.9688 20.9844 18 20.4844 17.0469C11.9531 19.5938 3.67188 19.4844 2.92188 19.4688C2.92188 19.6406 2.90625 19.8125 2.90625 19.9844C2.92188 24.375 4.57812 28.375 7.3125 31.4062ZM3.28125 16.5C4.04688 16.5156 11.0781 16.5469 19.0781 14.4219C16.25 9.39062 13.1875 5.17188 12.75 4.5625C7.95312 6.8125 4.39062 11.2188 3.28125 16.5ZM16 3.40625C16.4688 4.03125 19.5781 8.25 22.375 13.3906C28.4531 11.1094 31.0156 7.67188 31.3281 7.23438C28.3125 4.5625 24.3438 2.9375 20 2.9375C18.625 2.9375 17.2812 3.10938 16 3.40625ZM33.2188 9.20312C32.8594 9.6875 30 13.3594 23.6875 15.9375C24.0781 16.75 24.4688 17.5781 24.8281 18.4062C24.9531 18.7031 25.0781 19 25.2031 19.2812C30.8906 18.5625 36.5312 19.7188 37.0938 19.8281C37.0469 15.8125 35.6094 12.1094 33.2188 9.20312Z"
                  fill="#B2215A"
                />
              </g>
              <defs>
                <clipPath id="clip0_13_62">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div>
            <h4 className="text-lg font-semibold text-white">Dribbble Pro</h4>
            <p className="text-slate-400 text-xs">15 Days ago</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.20088 8.25039C6.4191 9.5142 4.5809 9.5142 3.79912 8.25039L0.892836 3.55215C0.0686245 2.21974 1.02699 0.5 2.59371 0.5H8.40629C9.97301 0.5 10.9314 2.21974 10.1072 3.55215L7.20088 8.25039Z"
                fill="#BB2D2D"
              />
            </svg>
          </span>
          <p className="text-slate-400 text-xs">-$250,93</p>
        </div>
      </div>
      {/* netflix logo  */}
      <div className="flex justify-between md:gap-24 gap-16 items-center">
        <div className="flex justify-center items-center gap-3">
          <span className="bg-white rounded-full py-2">
            <svg
              width="40"
              height="27"
              viewBox="0 0 40 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.84609 17.013C8.38323 17.0946 7.91223 17.119 7.425 17.1842L5.93888 12.8167V17.3716C5.47602 17.4205 5.05376 17.4857 4.61523 17.5508V9.20691H5.84961L7.53867 13.9412V9.20691H8.84609V17.013ZM11.4041 12.2626C11.9076 12.2626 12.6791 12.2381 13.1419 12.2381V13.5418C12.5654 13.5418 11.8914 13.5418 11.4041 13.5663V15.5056C12.1675 15.4567 12.9308 15.3915 13.7023 15.367V16.6218L10.1048 16.9071V9.20691H13.7023V10.5107H11.4041V12.2626ZM18.534 10.5107H17.186V16.5079C16.7475 16.5079 16.309 16.5079 15.8868 16.5241V10.5107H14.5388V9.20691H18.5341L18.534 10.5107ZM20.6454 12.1729H22.4239V13.4767H20.6454V16.4346H19.3704V9.20691H23.0004V10.5107H20.6454V12.1729ZM25.1118 15.2937C25.8508 15.31 26.5978 15.3671 27.3206 15.4078V16.6953C26.1594 16.6219 24.9981 16.5486 23.8125 16.5241V9.20691H25.1118V15.2937ZM28.4169 16.7849C28.831 16.8094 29.2696 16.8338 29.6918 16.8827V9.20691H28.4169V16.7849ZM35.3845 9.20691L33.7359 13.1752L35.3845 17.5508C34.8972 17.4857 34.4099 17.396 33.9227 17.3145L32.9888 14.9027L32.0388 17.119C31.5677 17.0375 31.113 17.013 30.6421 16.9478L32.3149 13.1262L30.8044 9.20691H32.2011L33.0538 11.3988L33.9633 9.20691H35.3845Z"
                fill="#D81F26"
              />
            </svg>
          </span>
          <div>
            <h4 className="text-lg font-semibold text-white">Netflix</h4>
            <p className="text-slate-400 text-xs">15 Days ago</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.20088 8.25039C6.4191 9.5142 4.5809 9.5142 3.79912 8.25039L0.892836 3.55215C0.0686245 2.21974 1.02699 0.5 2.59371 0.5H8.40629C9.97301 0.5 10.9314 2.21974 10.1072 3.55215L7.20088 8.25039Z"
                fill="#BB2D2D"
              />
            </svg>
          </span>
          <p className="text-slate-400 text-xs">-$250,93</p>
        </div>
      </div>
      {/* Manulife Cash logo  */}
      <div className="flex justify-between md:gap-16 gap-6 items-center">
        <div className="flex justify-center items-center gap-3">
          <span className="bg-white rounded-full">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20Z"
                fill="#DFFFF0"
              />
            </svg>
          </span>
          <div>
            <h4 className="text-lg font-semibold text-white">Manulife Cash</h4>
            <p className="text-slate-400 text-xs">15 Days ago</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <span>
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.79912 1.74961C4.5809 0.485802 6.4191 0.485803 7.20088 1.74961L10.1072 6.44785C10.9314 7.78026 9.97301 9.5 8.40629 9.5L2.59371 9.5C1.02699 9.5 0.0686247 7.78026 0.892835 6.44785L3.79912 1.74961Z"
                fill="#1AE5BE"
              />
            </svg>
          </span>
          <p className="text-slate-400 text-xs">-$250,93</p>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
