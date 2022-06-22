import React from "react";

export const IconFilter = ({width, height}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : 20}
      height={height ? height : 20}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#0A8EEF"
        fillRule="evenodd"
        d="M4.068 5.434A.726.726 0 014.728 5h14.545c.283 0 .54.17.66.434a.768.768 0 01-.105.8l-5.646 6.886v6.13c0 .26-.13.501-.345.638a.708.708 0 01-.708.033l-2.909-1.5a.753.753 0 01-.402-.671v-4.63L4.172 6.234a.769.769 0 01-.104-.8zM6.295 6.5l4.806 5.86a.764.764 0 01.172.485v4.441l1.454.75v-5.191c0-.177.061-.349.172-.484L17.705 6.5H6.295z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}