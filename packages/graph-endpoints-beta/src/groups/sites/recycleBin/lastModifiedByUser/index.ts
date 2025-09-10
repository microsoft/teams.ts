import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/mailboxSettings',
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
   * `GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id'],
      },
      params,
    };
  },
};
