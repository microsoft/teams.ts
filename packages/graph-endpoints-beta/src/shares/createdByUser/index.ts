import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/createdByUser': Operation<
    '/shares/{sharedDriveItem-id}/createdByUser',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings': Operation<
    '/shares/{sharedDriveItem-id}/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /shares/{sharedDriveItem-id}/createdByUser/serviceProvisioningErrors': Operation<
    '/shares/{sharedDriveItem-id}/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/createdByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/createdByUser']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/createdByUser']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/createdByUser',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/createdByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/createdByUser/mailboxSettings',
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
   * `GET /shares/{sharedDriveItem-id}/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
