const TRUTHY_STRING_VALUES = new Set(['1', 'true', 't', 'yes', 'y', 'on']);

export function isTruthyStringValue(value?: string): boolean {
  return value !== undefined && TRUTHY_STRING_VALUES.has(value.trim().toLowerCase());
}
