import React from "react";

export const IconPlus = ({width, height}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 20}
      height={height ? height : 20}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 6v12M6 12h12"
      ></path>
    </svg>
  );
}