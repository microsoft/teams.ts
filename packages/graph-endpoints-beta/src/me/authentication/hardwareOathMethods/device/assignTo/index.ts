import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo',
    'get'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings',
    'get'
  >;
  'PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings',
    'patch'
  >;
  'GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/serviceProvisioningErrors': Operation<
    '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo`
 *
 * Assign the hardware OATH token to a user.
 */
export function get(
  params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo',
    paramDefs: {
      path: ['hardwareOathAuthenticationMethod-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['hardwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/mailboxSettings',
      paramDefs: {
        path: ['hardwareOathAuthenticationMethod-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/authentication/hardwareOathMethods/{hardwareOathAuthenticationMethod-id}/device/assignTo/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['hardwareOathAuthenticationMethod-id'],
      },
      params,
    };
  },
};
