import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/createdByUser': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors': Operation<
    '/shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/createdByUser`
 *
 * Identity of the user who created the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/createdByUser',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/createdByUser/mailboxSettings',
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
   * `GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
