import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user',
    'get'
  >;
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
    'get'
  >;
  'PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
    'patch'
  >;
  'GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors': Operation<
    '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user`
 *
 * Represents the user associated with the network traffic, providing details about the individual or account initiating the transaction.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user',
    paramDefs: {
      path: ['networkAccessTraffic-transactionId'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['networkAccessTraffic-transactionId'],
      },
      params,
    };
  },
  /**
   * `PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/mailboxSettings',
      paramDefs: {
        path: ['networkAccessTraffic-transactionId'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/networkAccess/logs/traffic/{networkAccessTraffic-transactionId}/user/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['networkAccessTraffic-transactionId'],
      },
      params,
    };
  },
};
