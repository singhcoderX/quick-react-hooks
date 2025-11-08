import { useState, useCallback } from "react";
import { UseToggleReturn } from "./types";

function useToggle(initial: boolean = false): UseToggleReturn {
  const [state, setState] = useState<boolean>(initial);

  const toggle = useCallback(() => {
    setState((s) => !s);
  }, []);

  return [state, toggle];
}

export default useToggle;

