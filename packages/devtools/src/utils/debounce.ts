export function debounce(callback: (...args: any[]) => void | Promise<void>, ms = 200) {
  let id: NodeJS.Timeout | undefined;
  return (...args: any[]) => {
    clearTimeout(id);
    id = setTimeout(() => {
      clearTimeout(id);
      callback(...args);
    }, ms);
  };
}
