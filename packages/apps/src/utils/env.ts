const TRUTHY_ENV_VALUES = new Set(['1', 'true', 'yes', 'on']);
const FALSY_ENV_VALUES = new Set(['0', 'false', 'no', 'off']);

export function getBooleanEnvValue(name: string): boolean | undefined {
  const value = process.env[name];
  if (value === undefined) {
    return undefined;
  }

  const normalizedValue = value.trim().toLowerCase();
  if (!normalizedValue) {
    return undefined;
  }

  if (TRUTHY_ENV_VALUES.has(normalizedValue)) {
    return true;
  }

  if (FALSY_ENV_VALUES.has(normalizedValue)) {
    return false;
  }

  throw new Error(`${name} must be a boolean value: true/false, 1/0, yes/no, or on/off.`);
}
