import { useEffect, useState } from "react";

const defaultOptions = {
  root: null,
  threshold: 1.0,
  rootMargin: "0px",
};

const useVisible = (props: useVisibleProps) => {
  const { targetRef, options } = props;
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      ...defaultOptions,
      ...options,
    });
    if (targetRef?.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef?.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return isVisible;
};

export default useVisible;
