import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    'get'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'get'
  >;
  'PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'patch'
  >;
  'GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors': Operation<
    '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo`
 *
 * Assign the hardware OATH token to a user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    paramDefs: {
      path: [
        'user-id',
        'hardwareOathAuthenticationMethod-id',
        'hardwareOathTokenAuthenticationMethodDevice-id',
      ],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'user-id',
          'hardwareOathAuthenticationMethod-id',
          'hardwareOathTokenAuthenticationMethodDevice-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
      paramDefs: {
        path: [
          'user-id',
          'hardwareOathAuthenticationMethod-id',
          'hardwareOathTokenAuthenticationMethodDevice-id',
        ],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: [
          'user-id',
          'hardwareOathAuthenticationMethod-id',
          'hardwareOathTokenAuthenticationMethodDevice-id',
        ],
      },
      params,
    };
  },
};
