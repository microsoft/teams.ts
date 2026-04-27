import dns from 'node:dns';

import {
  UrlValidationError,
  isPrivateAddress,
  validateMcpServerUrl,
} from './url-validation';

describe('isPrivateAddress', () => {
  it.each([
    ['127.0.0.1', true],
    ['127.255.255.254', true],
    ['10.0.0.1', true],
    ['10.255.255.255', true],
    ['172.16.0.1', true],
    ['172.31.255.255', true],
    ['192.168.1.1', true],
    ['169.254.169.254', true],
    ['8.8.8.8', false],
    ['1.1.1.1', false],
    ['172.15.0.1', false],
    ['172.32.0.1', false],
    ['::1', true],
    ['fd00::1', true],
    ['fc00::1', true],
    ['fe80::1', true],
    ['fec0::1', true],
    ['::', true],
    ['2001:4860:4860::8888', false],
    ['::ffff:127.0.0.1', true],
    ['::ffff:8.8.8.8', false],
    ['not-an-ip', true],
  ])('%s → %s', (ip, expected) => {
    expect(isPrivateAddress(ip)).toBe(expected);
  });
});

describe('validateMcpServerUrl', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('throws on an unparseable URL', async () => {
    await expect(validateMcpServerUrl('not a url')).rejects.toBeInstanceOf(UrlValidationError);
  });

  it('throws on non-http schemes', async () => {
    await expect(validateMcpServerUrl('file:///etc/passwd')).rejects.toThrow(
      /scheme.*not allowed/
    );
    await expect(validateMcpServerUrl('data:text/plain,hi')).rejects.toThrow(
      /scheme.*not allowed/
    );
  });

  it('accepts a public URL when DNS resolves to a public IP', async () => {
    jest.spyOn(dns.promises, 'lookup').mockResolvedValue([
      { address: '8.8.8.8', family: 4 },
    ] as any);
    await expect(
      validateMcpServerUrl('https://example.com/mcp')
    ).resolves.toBeInstanceOf(URL);
  });

  it('rejects a URL that resolves to a private IP', async () => {
    jest.spyOn(dns.promises, 'lookup').mockResolvedValue([
      { address: '10.0.0.5', family: 4 },
    ] as any);
    await expect(
      validateMcpServerUrl('https://internal.example.com/mcp')
    ).rejects.toThrow(/private or loopback/);
  });

  it('rejects when any resolved address is private (multi-address)', async () => {
    jest.spyOn(dns.promises, 'lookup').mockResolvedValue([
      { address: '8.8.8.8', family: 4 },
      { address: '192.168.1.1', family: 4 },
    ] as any);
    await expect(
      validateMcpServerUrl('https://mixed.example.com/mcp')
    ).rejects.toThrow(/private or loopback/);
  });

  it('rejects IP-literal URLs pointing at private ranges without DNS', async () => {
    const lookupSpy = jest.spyOn(dns.promises, 'lookup');
    await expect(validateMcpServerUrl('http://127.0.0.1:3000')).rejects.toThrow(
      /private or loopback/
    );
    expect(lookupSpy).not.toHaveBeenCalled();
  });

  it('accepts private IPs when allowPrivateNetwork is true', async () => {
    await expect(
      validateMcpServerUrl('http://127.0.0.1:3000', { allowPrivateNetwork: true })
    ).resolves.toBeInstanceOf(URL);
  });

  it('accepts private hostnames when allowPrivateNetwork is true (skips DNS)', async () => {
    const lookupSpy = jest.spyOn(dns.promises, 'lookup');
    await expect(
      validateMcpServerUrl('https://internal.example.com/mcp', { allowPrivateNetwork: true })
    ).resolves.toBeInstanceOf(URL);
    expect(lookupSpy).not.toHaveBeenCalled();
  });

  it('defers entirely to validateUrl when set (skips scheme + host checks)', async () => {
    const seen: URL[] = [];
    await expect(
      validateMcpServerUrl('file:///etc/passwd', {
        validateUrl: (url) => {
          seen.push(url);
          return true;
        },
      })
    ).resolves.toBeInstanceOf(URL);
    expect(seen).toHaveLength(1);
    expect(seen[0].protocol).toBe('file:');
  });

  it('rejects when validateUrl returns false', async () => {
    await expect(
      validateMcpServerUrl('https://example.com/mcp', {
        validateUrl: () => false,
      })
    ).rejects.toThrow(/rejected by validateUrl/);
  });

  it('supports async validateUrl', async () => {
    await expect(
      validateMcpServerUrl('https://example.com/mcp', {
        validateUrl: async (url) => url.hostname === 'example.com',
      })
    ).resolves.toBeInstanceOf(URL);
  });

  it('rejects when DNS lookup fails', async () => {
    jest.spyOn(dns.promises, 'lookup').mockRejectedValue(new Error('ENOTFOUND'));
    await expect(
      validateMcpServerUrl('https://nonexistent.invalid/mcp')
    ).rejects.toThrow(/Could not resolve host/);
  });

  it('rejects when DNS returns an empty address list', async () => {
    jest.spyOn(dns.promises, 'lookup').mockResolvedValue([] as any);
    await expect(
      validateMcpServerUrl('https://example.com/mcp')
    ).rejects.toThrow(/did not resolve to any address/);
  });

  it('propagates exceptions thrown by validateUrl', async () => {
    await expect(
      validateMcpServerUrl('https://example.com/mcp', {
        validateUrl: () => {
          throw new Error('custom failure');
        },
      })
    ).rejects.toThrow(/custom failure/);
  });
});
