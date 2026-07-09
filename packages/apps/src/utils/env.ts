const TRUTHY_ENV_VALUES = new Set(['1', 'true', 't', 'yes', 'y', 'on']);

export function isTruthyEnvValue(value?: string): boolean {
  return value !== undefined && TRUTHY_ENV_VALUES.has(value.trim().toLowerCase());
}
