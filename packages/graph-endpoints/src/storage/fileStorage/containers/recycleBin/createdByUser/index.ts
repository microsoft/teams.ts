import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser',
    'get'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
    'patch'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser`
 *
 * Identity of the user who created the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/mailboxSettings',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/recycleBin/createdByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};
