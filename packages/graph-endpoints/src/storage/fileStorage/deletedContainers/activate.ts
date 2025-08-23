import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate',
    'post'
  >;
}

/**
 * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['body'],
  params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['response']
> {
  return {
    method: 'post',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate',
    paramDefs: [{ name: 'fileStorageContainer-id', in: 'path' }],
    params,
    body,
  };
}
