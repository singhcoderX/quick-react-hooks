interface useVisibleProps {
  targetRef: React.RefObject<HTMLDivElement>;
  options?: {
    root?: HTMLDivElement | null;
    threshold?: number;
    rootMargin?: string;
  };
}
