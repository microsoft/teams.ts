import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/createdByUser': Operation<
    '/groups/{group-id}/sites/{site-id}/createdByUser',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /groups/{group-id}/sites/{site-id}/createdByUser/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/sites/{site-id}/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/createdByUser`
 *
 * Identity of the user who created the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/createdByUser']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/createdByUser',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/createdByUser/mailboxSettings',
      paramDefs: {
        path: ['group-id', 'site-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};
