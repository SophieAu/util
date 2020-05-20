// taken from Tanner Linsley's talk at JSConf Hawaii (https://www.youtube.com/watch?v=J-g9ZJha8FE)

import React, { useEffect, useRef } from "react";

export const useClickOutside = (
  elementRef: React.RefObject<HTMLElement>,
  callback: (e: MouseEvent) => void
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (elementRef.current?.contains(e.target as Node))
        callbackRef.current?.(e);
    };

    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [callbackRef, elementRef]);
};
