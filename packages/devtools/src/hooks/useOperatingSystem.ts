import { useMemo } from 'react';

const useOperatingSystem = () => {
  const isMac = useMemo(
    () => /mac/i.test((navigator as any).userAgentData?.platform || navigator.userAgent),
    []
  );

  return { isMac };
};

export default useOperatingSystem;
