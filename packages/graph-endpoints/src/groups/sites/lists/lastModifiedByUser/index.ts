import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser',
    paramDefs: {
      path: ['group-id', 'site-id', 'list-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'list-id'],
      },
      params,
    };
  },
};
