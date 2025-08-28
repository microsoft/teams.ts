import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
