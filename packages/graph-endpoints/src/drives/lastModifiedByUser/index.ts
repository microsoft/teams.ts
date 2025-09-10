import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/lastModifiedByUser': Operation<
    '/drives/{drive-id}/lastModifiedByUser',
    'get'
  >;
  'GET /drives/{drive-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /drives/{drive-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/lastModifiedByUser']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/lastModifiedByUser',
    paramDefs: {
      path: ['drive-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /drives/{drive-id}/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        path: ['drive-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
};
