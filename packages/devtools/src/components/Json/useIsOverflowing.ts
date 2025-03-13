import { useCallback, useState } from 'react';

export const useIsOverflowing = () => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const ref = useCallback((node: HTMLElement | null) => {
    if (node) {
      setIsOverflowing(node.scrollWidth > node.clientWidth);
    }
  }, []);

  return { ref, isOverflowing };
};
