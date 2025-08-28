import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'get'
  >;
  'PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/authenticationMethodDevices/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    paramDefs: [{ name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' }],
    params,
    body,
  };
}
