import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lastModifiedByUser': Operation<
    '/sites/{site-id}/lastModifiedByUser',
    'get'
  >;
  'GET /sites/{site-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/lastModifiedByUser']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/lastModifiedByUser',
    paramDefs: {
      path: ['site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /sites/{site-id}/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/sites/{site-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        path: ['site-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/sites/{site-id}/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id'],
      },
      params,
    };
  },
};
