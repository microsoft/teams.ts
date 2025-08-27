import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'patch'
  >;
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
 *
 * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'hardwareOathAuthenticationMethod-id', in: 'path' },
      { name: 'hardwareOathTokenAuthenticationMethodDevice-id', in: 'path' },
    ],
    params,
    body,
  };
}
