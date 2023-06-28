import React from "react";

export const useLogRenders = () => {
  const renders = React.useRef(0);
  renders.current++;
  console.log(renders.current);
};
