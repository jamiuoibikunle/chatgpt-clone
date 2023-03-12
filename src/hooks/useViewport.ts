import { useEffect, useState } from "react";

const useViewport = (breakpoint: number) => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return width > breakpoint ? [true] : [false];
};

export default useViewport;
