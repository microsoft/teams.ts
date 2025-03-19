import { useCallback, useState } from 'react';

interface UseIsOverflowingOptions {
  subtractSelector?: string;
}

export const useIsOverflowing = (options?: UseIsOverflowingOptions) => {
  const [isOverflowing, setIsOverflowing] = useState(false);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node) {
        let subtractWidth = 0;
        if (options?.subtractSelector) {
          const subtractElement = node.querySelector(options.subtractSelector);
          if (subtractElement) {
            subtractWidth = subtractElement.getBoundingClientRect().width;
          }
        }
        const availableWidth = node.clientWidth - subtractWidth;
        setIsOverflowing(node.scrollWidth > availableWidth);
      }
    },
    [options?.subtractSelector]
  );

  return { ref, isOverflowing };
};
