import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/createdByUser': Operation<
    '/drives/{drive-id}/list/createdByUser',
    'get'
  >;
  'GET /drives/{drive-id}/list/createdByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/createdByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /drives/{drive-id}/list/createdByUser/serviceProvisioningErrors': Operation<
    '/drives/{drive-id}/list/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/createdByUser`
 *
 * Identity of the user who created the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/createdByUser']['response']> {
  return {
    method: 'get',
    path: '/drives/{drive-id}/list/createdByUser',
    paramDefs: {
      path: ['drive-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /drives/{drive-id}/list/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/drives/{drive-id}/list/createdByUser/mailboxSettings',
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
   * `GET /drives/{drive-id}/list/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/drives/{drive-id}/list/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
};
