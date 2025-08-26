import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
