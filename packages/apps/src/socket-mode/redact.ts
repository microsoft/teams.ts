const REDACTED = '[REDACTED]';

/**
 * Removes Socket Mode credentials from diagnostic text before it reaches logs
 * or caller-visible errors.
 *
 * @param value Diagnostic text that may contain a credential.
 * @param secrets Exact credential values known by the caller.
 * @returns Diagnostic text with bearer tokens and sensitive fields redacted.
 */
export function redactSocketModeSecrets(
  value: string,
  secrets: readonly string[] = []
): string {
  let redacted = value;
  for (const secret of secrets) {
    if (secret) {
      redacted = redacted.split(secret).join(REDACTED);
    }
  }

  return redacted
    .replace(/(Bearer\s+)[^\s"',}]+/gi, `$1${REDACTED}`)
    .replace(
      /([?&](?:access_token|token|client_secret)=)[^&\s]+/gi,
      `$1${REDACTED}`
    )
    .replace(
      /((?:"|')?(?:accessToken|access_token|clientSecret|client_secret|authorization|token)(?:"|')?\s*[:=]\s*(?:"|')?)([^"',}\s&]+)/gi,
      `$1${REDACTED}`
    );
}
