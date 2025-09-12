import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/createdByUser': Operation<
    '/sites/{site-id}/lists/{list-id}/createdByUser',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /sites/{site-id}/lists/{list-id}/createdByUser/serviceProvisioningErrors': Operation<
    '/sites/{site-id}/lists/{list-id}/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/createdByUser`
 *
 * Identity of the user who created the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/createdByUser',
    paramDefs: {
      path: ['site-id', 'list-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/createdByUser/mailboxSettings',
      paramDefs: {
        path: ['site-id', 'list-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'list-id'],
      },
      params,
    };
  },
};
