import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser',
    paramDefs: {
      path: ['fileStorageContainer-id', 'recycleBinItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainer-id', 'recycleBinItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      method: 'patch',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        path: ['fileStorageContainer-id', 'recycleBinItem-id'],
      },
      params,
      body,
    };
  },
};

export const serviceProvisioningErrors = {
  /**
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.  Supports $filter (eq, not, for isResolved and serviceInstance).
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/items/{recycleBinItem-id}/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['fileStorageContainer-id', 'recycleBinItem-id'],
      },
      params,
    };
  },
};
