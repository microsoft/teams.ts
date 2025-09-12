import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser': Operation<
    '/shares/{sharedDriveItem-id}/list/lastModifiedByUser',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/shares/{sharedDriveItem-id}/list/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/lastModifiedByUser',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
