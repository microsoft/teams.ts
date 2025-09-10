import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/list/lastModifiedByUser': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser',
    'get'
  >;
  'GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/list/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser']['parameters']
): EndpointRequest<IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/list/lastModifiedByUser',
    paramDefs: {
      path: ['drive-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/list/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/drives/{drive-id}/list/lastModifiedByUser/mailboxSettings',
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
   * `GET /drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/list/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id'],
      },
      params,
    };
  },
};
