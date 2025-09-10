import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings',
    'patch'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const mailboxSettings = {
  /**
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings`
   *
   * Settings for the primary mailbox of the signed-in user. You can get or update settings for sending automatic replies to incoming messages, locale, and time zone. For more information, see User preferences for languages and regional formats. Returned only on $select.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/mailboxSettings',
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
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors`
   *
   * Errors published by a federated service describing a nontransient, service-specific error regarding the properties or link from a user object.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser/serviceProvisioningErrors',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};
