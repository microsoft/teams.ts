import { JsonValue } from '../../types/JsonValue';

export const getCollapsedValue = (value: JsonValue): string => {
  if (Array.isArray(value)) {
    return `[${value
      .map((item) => {
        if (typeof item === 'string') return `"${item}"`;
        return JSON.stringify(item);
      })
      .join(', ')}]`;
  }
  if (typeof value === 'object' && value !== null) {
    const entries = Object.entries(value);
    if (entries.length === 0) return '{}';
    return `{ ${entries
      .map(([key, val]) => {
        const valStr = typeof val === 'string' ? `"${val}"` : JSON.stringify(val);
        return `${key}: ${valStr}`;
      })
      .join(', ')} }`;
  }
  return '';
};

export const hasOnlyPrimitiveChildren = (value: JsonValue): boolean => {
  if (!value || typeof value !== 'object') return false;
  return Object.values(value).every((v) => v === null || typeof v !== 'object');
};

export const isCircular = (value: JsonValue, path: JsonValue[] = []): boolean => {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  return path.some((item) => item === value);
};
