import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/serviceProvisioningErrors': Operation<
    '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser',
    paramDefs: {
      path: ['group-id', 'site-id', 'recycleBinItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'site-id', 'recycleBinItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/mailboxSettings',
      paramDefs: {
        path: ['group-id', 'site-id', 'recycleBinItem-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/recycleBin/items/{recycleBinItem-id}/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'site-id', 'recycleBinItem-id'],
      },
      params,
    };
  },
};
