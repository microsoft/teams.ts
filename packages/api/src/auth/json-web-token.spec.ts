import jwt from 'jsonwebtoken';

import { CallerIds } from './caller';
import { JsonWebToken } from './json-web-token';

describe('JsonWebToken', () => {
  it('should be from bot', () => {
    const str = jwt.sign(
      {
        kid: '456',
        appid: 'test',
        tid: '789',
        serviceurl: 'https://smba.test.com/',
      },
      'test',
      {
        audience: '123',
        issuer: 'test',
      }
    );

    const token = new JsonWebToken(str);

    expect(token).toBeDefined();
    expect(token.audience).toEqual('123');
    expect(token.issuer).toEqual('test');
    expect(token.keyId).toEqual('456');
    expect(token.appId).toEqual('test');
    expect(token.tenantId).toEqual('789');
    expect(token.version).toBeUndefined();
    expect(token.from).toEqual('bot');
    expect(token.fromId).toEqual(`${CallerIds.bot}:test`);
    expect(token.serviceUrl).toEqual('https://smba.test.com');
    expect(token.toString()).toEqual(str);
  });

  it('should be from azure', () => {
    const token = new JsonWebToken(
      jwt.sign(
        {
          serviceurl: 'https://smba.test.com',
        },
        'test'
      )
    );

    expect(token).toBeDefined();
    expect(token.appId).toBeUndefined();
    expect(token.from).toEqual('azure');
    expect(token.fromId).toEqual(CallerIds.azure);
    expect(token.serviceUrl).toEqual('https://smba.test.com');
  });

  it('should have default serviceUrl', () => {
    const token = new JsonWebToken(jwt.sign({}, 'test'));

    expect(token).toBeDefined();
    expect(token.appId).toBeUndefined();
    expect(token.from).toEqual('azure');
    expect(token.fromId).toEqual(CallerIds.azure);
    expect(token.serviceUrl).toEqual('https://smba.trafficmanager.net/teams');
  });
});
