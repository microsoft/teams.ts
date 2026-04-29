import dns from 'node:dns';
import net from 'node:net';

export class UrlValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UrlValidationError';
  }
}

function redactCreds(s: string): string {
  return s.replace(/(\b[a-z][a-z0-9+.-]*:\/\/)[^@/?#]*@/i, '$1[REDACTED]@');
}

export type UrlValidationParams = {
  allowPrivateNetwork?: boolean;
  validateUrl?: (url: URL) => boolean | Promise<boolean>;
};

/**
 * Validates a URL destined for an MCP server connection. When `validateUrl` is
 * provided, it fully replaces the default checks. Otherwise the default policy
 * rejects non-http(s) schemes, and (unless `allowPrivateNetwork` is true) rejects
 * URLs whose hostname resolves to a private / loopback / link-local address.
 */
export async function validateMcpServerUrl(
  urlString: string,
  params: UrlValidationParams = {}
): Promise<URL> {
  let url: URL;
  try {
    url = new URL(urlString);
  } catch {
    throw new UrlValidationError(`Invalid URL: ${JSON.stringify(redactCreds(urlString))}`);
  }

  if (params.validateUrl) {
    const ok = await params.validateUrl(url);
    if (!ok) {
      throw new UrlValidationError(`URL rejected by validateUrl: ${redactCreds(urlString)}`);
    }
    return url;
  }

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new UrlValidationError(
      `URL scheme ${url.protocol} is not allowed; must be http or https`
    );
  }

  const hostname = stripBrackets(url.hostname);

  // Always reject unspecified addresses (0.0.0.0 / ::) — even with allowPrivateNetwork.
  // These aren't valid destinations and route to the local host on some platforms.
  if (isUnspecifiedIp(hostname)) {
    throw new UrlValidationError(
      `URL ${redactCreds(urlString)} resolves to unspecified address ${hostname}`
    );
  }

  if (params.allowPrivateNetwork === true) {
    return url;
  }

  const addresses = await resolveHost(hostname, urlString);
  if (addresses.length === 0) {
    throw new UrlValidationError(
      `URL ${redactCreds(urlString)} did not resolve to any address`
    );
  }
  for (const addr of addresses) {
    if (isPrivateAddress(addr)) {
      throw new UrlValidationError(
        `URL ${redactCreds(urlString)} resolves to private or loopback address ${addr}; set allowPrivateNetwork: true to bypass`
      );
    }
  }

  return url;
}

export function isPrivateAddress(address: string): boolean {
  const family = net.isIP(address);
  if (family === 4) {
    return isPrivateIpv4(address);
  }
  if (family === 6) {
    return isPrivateIpv6(address);
  }
  // Unknown / unresolved: treat as private (fail closed).
  return true;
}

function isUnspecifiedIp(literal: string): boolean {
  const family = net.isIP(literal);
  if (family === 4) {
    return literal.split('.').map(Number)[0] === 0;
  }
  if (family === 6) {
    // Already validated as IPv6 by net.isIP; if it contains nothing but
    // zeros and colons, it's the unspecified address (`::`, `0:0:0:0:0:0:0:0`,
    // `0::`, `::0`, etc.).
    return /^[0:]+$/.test(literal);
  }
  return false;
}

function isPrivateIpv4(ip: string): boolean {
  const parts = ip.split('.').map(Number);
  if (parts.length !== 4 || parts.some((p) => Number.isNaN(p) || p < 0 || p > 255)) {
    return true;
  }
  const [a, b] = parts;
  if (a === 0) return true;                          // 0.0.0.0/8 ("this network"; routes to localhost on Linux)
  if (a === 127) return true;                        // 127.0.0.0/8 loopback
  if (a === 10) return true;                         // 10.0.0.0/8
  if (a === 192 && b === 168) return true;           // 192.168.0.0/16
  if (a === 172 && b >= 16 && b <= 31) return true;  // 172.16.0.0/12
  if (a === 169 && b === 254) return true;           // 169.254.0.0/16 link-local
  if (a === 100 && b >= 64 && b <= 127) return true; // 100.64.0.0/10 CGNAT (RFC 6598)
  if (a >= 224) return true;                         // 224.0.0.0/4 multicast + 240.0.0.0/4 reserved + 255.255.255.255
  return false;
}

function isPrivateIpv6(ip: string): boolean {
  const lower = ip.toLowerCase();
  if (lower === '::1') return true;
  if (lower === '::') return true;
  // ff00::/8 (multicast) — first byte is 0xff
  if (/^ff[0-9a-f]{2}:/.test(lower)) return true;
  // fc00::/7 (unique local)
  if (/^f[cd][0-9a-f]{2}:/.test(lower)) return true;
  // fe80::/10 (link-local): first 10 bits are 1111 1110 10
  if (/^fe[89ab][0-9a-f]:/.test(lower)) return true;
  // fec0::/10 (deprecated site-local per RFC 4291, still in some networks)
  if (/^fe[cdef][0-9a-f]:/.test(lower)) return true;
  // IPv4-mapped IPv6: ::ffff:a.b.c.d -- check the embedded v4
  const v4Mapped = lower.match(/^::ffff:([0-9.]+)$/);
  if (v4Mapped) return isPrivateIpv4(v4Mapped[1]);
  return false;
}

function stripBrackets(hostname: string): string {
  if (hostname.startsWith('[') && hostname.endsWith(']')) {
    return hostname.slice(1, -1);
  }
  return hostname;
}

async function resolveHost(hostname: string, urlString: string): Promise<string[]> {
  // If the hostname is already an IP literal, DNS lookup still returns it, but
  // skip the round-trip for clarity.
  if (net.isIP(hostname)) {
    return [hostname];
  }
  try {
    const addresses = await dns.promises.lookup(hostname, { all: true });
    return addresses.map((entry) => entry.address);
  } catch (err) {
    throw new UrlValidationError(
      `Could not resolve host ${hostname} for URL ${redactCreds(urlString)}: ${(err as Error).message}`
    );
  }
}
