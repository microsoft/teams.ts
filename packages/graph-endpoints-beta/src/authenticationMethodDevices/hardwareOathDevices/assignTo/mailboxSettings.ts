import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'get'
  >;
  'PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'authenticationMethodDevice-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    paramDefs: [
      { name: 'authenticationMethodDevice-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
