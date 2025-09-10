import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /drives/{drive-id}/items/{driveItem-id}/createdByUser': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createdByUser',
    'get'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/serviceProvisioningErrors': Operation<
    '/drives/{drive-id}/items/{driveItem-id}/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /drives/{drive-id}/items/{driveItem-id}/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/drives/{drive-id}/items/{driveItem-id}/createdByUser',
    paramDefs: {
      path: ['drive-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/drives/{drive-id}/items/{driveItem-id}/createdByUser/mailboxSettings',
      paramDefs: {
        path: ['drive-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /drives/{drive-id}/items/{driveItem-id}/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/drives/{drive-id}/items/{driveItem-id}/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['drive-id', 'driveItem-id'],
      },
      params,
    };
  },
};
