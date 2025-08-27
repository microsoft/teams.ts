export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser',
    'get'
  >;
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser`
 *
 * Identity of the user who last modified the item. Read-only.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser']['response']
> {
  return {
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/recycleBin/lastModifiedByUser',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainer-id', in: 'path' },
    ],
    params,
  };
}
