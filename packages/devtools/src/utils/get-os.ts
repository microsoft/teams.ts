export const isMacOS = (): boolean =>
  /mac/i.test((navigator as any).userAgentData?.platform || navigator.userAgent);
