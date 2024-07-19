import { useEffect, useState } from "react";

const useElementHeight = (elementRef: React.RefObject<HTMLElement>) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (elementRef.current) {
        setHeight(elementRef.current.clientHeight);
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (elementRef.current) {
      updateHeight();
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        resizeObserver.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);

  return height;
};

export default useElementHeight;
