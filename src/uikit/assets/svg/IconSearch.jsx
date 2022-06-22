import React from "react";

export const IconSearch = ({fill}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill={fill ? fill : "#9099AC"}
        d="M14.645 12.83l-3.449-3.449a6.061 6.061 0 10-1.673 1.756l3.407 3.407c.237.237.548.355.858.355a1.21 1.21 0 00.857-2.069zM6.06 10.26a4.097 4.097 0 110-8.194 4.097 4.097 0 010 8.194z"
      ></path>
    </svg>
  );
}

export default IconSearch;
