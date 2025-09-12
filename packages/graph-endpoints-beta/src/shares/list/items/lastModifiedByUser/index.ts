import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
    };
  },
};
