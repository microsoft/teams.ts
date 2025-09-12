import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    'get'
  >;
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'get'
  >;
  'PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
    'patch'
  >;
  'GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors': Operation<
    '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo`
 *
 * Assign the hardware OATH token to a user.
 */
export function get(
  params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo',
    paramDefs: {
      path: ['authenticationMethodDevice-id', 'hardwareOathTokenAuthenticationMethodDevice-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['authenticationMethodDevice-id', 'hardwareOathTokenAuthenticationMethodDevice-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/mailboxSettings',
      paramDefs: {
        path: ['authenticationMethodDevice-id', 'hardwareOathTokenAuthenticationMethodDevice-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/authenticationMethodDevices/{authenticationMethodDevice-id}/hardwareOathDevices/{hardwareOathTokenAuthenticationMethodDevice-id}/assignTo/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['authenticationMethodDevice-id', 'hardwareOathTokenAuthenticationMethodDevice-id'],
      },
      params,
    };
  },
};
