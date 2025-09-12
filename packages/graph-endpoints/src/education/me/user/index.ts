import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /education/me/user': Operation<'/education/me/user', 'get'>;
  'GET /education/me/user/mailboxSettings': Operation<'/education/me/user/mailboxSettings', 'get'>;
  'PATCH /education/me/user/mailboxSettings': Operation<
    '/education/me/user/mailboxSettings',
    'patch'
  >;
  'GET /education/me/user/serviceProvisioningErrors': Operation<
    '/education/me/user/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /education/me/user`
 *
 * Retrieve the simple directory user that corresponds to this educationUser.
 */
export function get(
  params?: IEndpoints['GET /education/me/user']['parameters']
): EndpointRequest<IEndpoints['GET /education/me/user']['response']> {
  return {
    method: 'get',
    path: '/education/me/user',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /education/me/user/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /education/me/user/mailboxSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/user/mailboxSettings']['response']> {
    return {
      method: 'get',
      path: '/education/me/user/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /education/me/user/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /education/me/user/mailboxSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /education/me/user/mailboxSettings']['response']> {
    return {
      method: 'patch',
      path: '/education/me/user/mailboxSettings',
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /education/me/user/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /education/me/user/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<IEndpoints['GET /education/me/user/serviceProvisioningErrors']['response']> {
    return {
      method: 'get',
      path: '/education/me/user/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
};
