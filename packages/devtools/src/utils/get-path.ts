export function getPath(value: any, path: string, defaultValue?: any) {
  const parts = path.split('.');

  for (const part of parts) {
    if (value === undefined || value === null) return defaultValue;
    if (typeof value !== 'object') return defaultValue;
    value = value[part];
  }

  return value;
}
