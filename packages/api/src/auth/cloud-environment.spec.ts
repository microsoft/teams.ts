import {
  PUBLIC,
  US_GOV,
  US_GOV_DOD,
  CHINA,
  cloudFromName,
  withOverrides,
} from './cloud-environment';

describe('CloudEnvironment', () => {
  describe('presets', () => {
    it('PUBLIC has correct endpoints', () => {
      expect(PUBLIC.loginEndpoint).toBe('https://login.microsoftonline.com');
      expect(PUBLIC.loginTenant).toBe('botframework.com');
      expect(PUBLIC.botScope).toBe('https://api.botframework.com/.default');
      expect(PUBLIC.tokenServiceUrl).toBe('https://token.botframework.com');
      expect(PUBLIC.openIdMetadataUrl).toBe('https://login.botframework.com/v1/.well-known/openidconfiguration');
      expect(PUBLIC.tokenIssuer).toBe('https://api.botframework.com');
    });

    it('US_GOV has correct endpoints', () => {
      expect(US_GOV.loginEndpoint).toBe('https://login.microsoftonline.us');
      expect(US_GOV.loginTenant).toBe('MicrosoftServices.onmicrosoft.us');
      expect(US_GOV.botScope).toBe('https://api.botframework.us/.default');
      expect(US_GOV.tokenServiceUrl).toBe('https://tokengcch.botframework.azure.us');
      expect(US_GOV.openIdMetadataUrl).toBe('https://login.botframework.azure.us/v1/.well-known/openidconfiguration');
      expect(US_GOV.tokenIssuer).toBe('https://api.botframework.us');
    });

    it('US_GOV_DOD has correct endpoints', () => {
      expect(US_GOV_DOD.loginEndpoint).toBe('https://login.microsoftonline.us');
      expect(US_GOV_DOD.loginTenant).toBe('MicrosoftServices.onmicrosoft.us');
      expect(US_GOV_DOD.botScope).toBe('https://api.botframework.us/.default');
      expect(US_GOV_DOD.tokenServiceUrl).toBe('https://apiDoD.botframework.azure.us');
      expect(US_GOV_DOD.openIdMetadataUrl).toBe('https://login.botframework.azure.us/v1/.well-known/openidconfiguration');
      expect(US_GOV_DOD.tokenIssuer).toBe('https://api.botframework.us');
    });

    it('CHINA has correct endpoints', () => {
      expect(CHINA.loginEndpoint).toBe('https://login.partner.microsoftonline.cn');
      expect(CHINA.loginTenant).toBe('microsoftservices.partner.onmschina.cn');
      expect(CHINA.botScope).toBe('https://api.botframework.azure.cn/.default');
      expect(CHINA.tokenServiceUrl).toBe('https://token.botframework.azure.cn');
      expect(CHINA.openIdMetadataUrl).toBe('https://login.botframework.azure.cn/v1/.well-known/openidconfiguration');
      expect(CHINA.tokenIssuer).toBe('https://api.botframework.azure.cn');
    });

    it('presets are frozen', () => {
      expect(Object.isFrozen(PUBLIC)).toBe(true);
      expect(Object.isFrozen(US_GOV)).toBe(true);
      expect(Object.isFrozen(US_GOV_DOD)).toBe(true);
      expect(Object.isFrozen(CHINA)).toBe(true);
    });
  });

  describe('cloudFromName', () => {
    it.each([
      ['Public', PUBLIC],
      ['public', PUBLIC],
      ['PUBLIC', PUBLIC],
      ['USGov', US_GOV],
      ['usgov', US_GOV],
      ['USGovDoD', US_GOV_DOD],
      ['usgovdod', US_GOV_DOD],
      ['China', CHINA],
      ['china', CHINA],
    ])('resolves "%s" correctly', (name, expected) => {
      expect(cloudFromName(name)).toBe(expected);
    });

    it.each(['invalid', '', 'Azure'])('throws for unknown name "%s"', (name) => {
      expect(() => cloudFromName(name)).toThrow(/Unknown cloud environment/);
    });
  });

  describe('withOverrides', () => {
    it('returns equivalent object when no overrides provided', () => {
      const result = withOverrides(PUBLIC, {});
      expect(result).toEqual(PUBLIC);
    });

    it('returns equivalent object when all overrides are undefined', () => {
      const result = withOverrides(PUBLIC, {
        loginEndpoint: undefined,
        loginTenant: undefined,
      });
      expect(result).toEqual(PUBLIC);
    });

    it('replaces only the overridden property', () => {
      const result = withOverrides(PUBLIC, { loginTenant: 'my-tenant-id' });

      expect(result).not.toBe(PUBLIC);
      expect(result.loginTenant).toBe('my-tenant-id');
      expect(result.loginEndpoint).toBe(PUBLIC.loginEndpoint);
      expect(result.botScope).toBe(PUBLIC.botScope);
      expect(result.tokenServiceUrl).toBe(PUBLIC.tokenServiceUrl);
      expect(result.openIdMetadataUrl).toBe(PUBLIC.openIdMetadataUrl);
      expect(result.tokenIssuer).toBe(PUBLIC.tokenIssuer);
    });

    it('replaces multiple properties', () => {
      const result = withOverrides(CHINA, {
        loginEndpoint: 'https://custom.login.cn',
        loginTenant: 'custom-tenant',
        tokenServiceUrl: 'https://custom.token.cn',
      });

      expect(result.loginEndpoint).toBe('https://custom.login.cn');
      expect(result.loginTenant).toBe('custom-tenant');
      expect(result.tokenServiceUrl).toBe('https://custom.token.cn');
      expect(result.botScope).toBe(CHINA.botScope);
      expect(result.openIdMetadataUrl).toBe(CHINA.openIdMetadataUrl);
    });

    it('replaces all properties', () => {
      const result = withOverrides(PUBLIC, {
        loginEndpoint: 'a',
        loginTenant: 'b',
        botScope: 'c',
        tokenServiceUrl: 'd',
        openIdMetadataUrl: 'e',
        tokenIssuer: 'f',
      });

      expect(result.loginEndpoint).toBe('a');
      expect(result.loginTenant).toBe('b');
      expect(result.botScope).toBe('c');
      expect(result.tokenServiceUrl).toBe('d');
      expect(result.openIdMetadataUrl).toBe('e');
      expect(result.tokenIssuer).toBe('f');
    });

    it('result is frozen', () => {
      const result = withOverrides(PUBLIC, { loginTenant: 'test' });
      expect(Object.isFrozen(result)).toBe(true);
    });
  });
});
