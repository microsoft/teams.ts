import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser': Operation<
    '/sites/{site-id}/lists/{list-id}/lastModifiedByUser',
    'get'
  >;
  'GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/lists/{list-id}/lastModifiedByUser',
    paramDefs: {
      path: ['site-id', 'list-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['site-id', 'list-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/mailboxSettings',
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
   * `GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/lists/{list-id}/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['site-id', 'list-id'],
      },
      params,
    };
  },
};
